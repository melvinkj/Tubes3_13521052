--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: chat; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat (
    chat_id integer NOT NULL,
    topic text
);


ALTER TABLE public.chat OWNER TO postgres;

--
-- Name: chat_chat_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chat_chat_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chat_chat_id_seq OWNER TO postgres;

--
-- Name: chat_chat_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chat_chat_id_seq OWNED BY public.chat.chat_id;


--
-- Name: chat_message_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.chat_message_history (
    msg_id integer NOT NULL,
    chat_id integer NOT NULL,
    msg_content text,
    msg_sender text
);


ALTER TABLE public.chat_message_history OWNER TO postgres;

--
-- Name: chat_message_history_msg_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.chat_message_history_msg_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chat_message_history_msg_id_seq OWNER TO postgres;

--
-- Name: chat_message_history_msg_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.chat_message_history_msg_id_seq OWNED BY public.chat_message_history.msg_id;


--
-- Name: qna_dataset; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.qna_dataset (
    question text NOT NULL,
    answer text NOT NULL
);


ALTER TABLE public.qna_dataset OWNER TO postgres;

--
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    user_id integer NOT NULL,
    user_name character varying(30) NOT NULL,
    user_email character varying(200) NOT NULL,
    user_password character varying(100) NOT NULL
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- Name: user_chats; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_chats (
    user_id integer NOT NULL,
    chat_id integer NOT NULL
);


ALTER TABLE public.user_chats OWNER TO postgres;

--
-- Name: user_user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_user_id_seq OWNER TO postgres;

--
-- Name: user_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_user_id_seq OWNED BY public."user".user_id;


--
-- Name: chat chat_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat ALTER COLUMN chat_id SET DEFAULT nextval('public.chat_chat_id_seq'::regclass);


--
-- Name: chat_message_history msg_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_message_history ALTER COLUMN msg_id SET DEFAULT nextval('public.chat_message_history_msg_id_seq'::regclass);


--
-- Name: user user_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN user_id SET DEFAULT nextval('public.user_user_id_seq'::regclass);


--
-- Data for Name: chat; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chat (chat_id, topic) FROM stdin;
\.


--
-- Data for Name: chat_message_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.chat_message_history (msg_id, chat_id, msg_content, msg_sender) FROM stdin;
\.


--
-- Data for Name: qna_dataset; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.qna_dataset (question, answer) FROM stdin;
\.


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."user" (user_id, user_name, user_email, user_password) FROM stdin;
\.


--
-- Data for Name: user_chats; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.user_chats (user_id, chat_id) FROM stdin;
\.


--
-- Name: chat_chat_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chat_chat_id_seq', 1, false);


--
-- Name: chat_message_history_msg_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.chat_message_history_msg_id_seq', 1, false);


--
-- Name: user_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.user_user_id_seq', 1, false);


--
-- Name: chat_message_history chat_message_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_message_history
    ADD CONSTRAINT chat_message_history_pkey PRIMARY KEY (msg_id, chat_id);


--
-- Name: chat chat_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat
    ADD CONSTRAINT chat_pkey PRIMARY KEY (chat_id);


--
-- Name: qna_dataset qna_dataset_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.qna_dataset
    ADD CONSTRAINT qna_dataset_pkey PRIMARY KEY (question);


--
-- Name: user_chats user_chats_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_chats
    ADD CONSTRAINT user_chats_pkey PRIMARY KEY (user_id, chat_id);


--
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (user_id);


--
-- Name: user_chats chat_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_chats
    ADD CONSTRAINT chat_fk FOREIGN KEY (chat_id) REFERENCES public.chat(chat_id) ON DELETE CASCADE;


--
-- Name: chat_message_history chat_id_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.chat_message_history
    ADD CONSTRAINT chat_id_fk FOREIGN KEY (chat_id) REFERENCES public.chat(chat_id) ON DELETE CASCADE;


--
-- Name: user_chats user_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_chats
    ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES public."user"(user_id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

