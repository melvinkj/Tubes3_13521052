import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient;
}
interface Message {
    text: string;
    createdAt: admin.firestore.Timestamp;
    user: {
        _id : string;
        name: string;
        avatar: string;
    };
}