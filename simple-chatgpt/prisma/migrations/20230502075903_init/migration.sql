-- CreateTable
CREATE TABLE "Chat" (
    "chat_id" SERIAL NOT NULL,
    "topic" TEXT,

    CONSTRAINT "Chat_pkey" PRIMARY KEY ("chat_id")
);

-- CreateTable
CREATE TABLE "ChatMessageHistory" (
    "msg_id" SERIAL NOT NULL,
    "chat_id" INTEGER NOT NULL,
    "msg_content" TEXT,
    "msg_sender" TEXT,

    CONSTRAINT "ChatMessageHistory_pkey" PRIMARY KEY ("msg_id")
);

-- CreateTable
CREATE TABLE "QnADataset" (
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "QnADataset_pkey" PRIMARY KEY ("question")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "UserChats" (
    "user_id" INTEGER NOT NULL,
    "chat_id" INTEGER NOT NULL,

    CONSTRAINT "UserChats_pkey" PRIMARY KEY ("user_id","chat_id")
);

-- AddForeignKey
ALTER TABLE "ChatMessageHistory" ADD CONSTRAINT "ChatMessageHistory_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chat"("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChats" ADD CONSTRAINT "UserChats_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserChats" ADD CONSTRAINT "UserChats_chat_id_fkey" FOREIGN KEY ("chat_id") REFERENCES "Chat"("chat_id") ON DELETE RESTRICT ON UPDATE CASCADE;
