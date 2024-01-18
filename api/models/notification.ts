// models/notification.ts

import mongoose, { Document } from 'mongoose';

export interface Notification extends Document {
  title: string;
  content: string;
  imageUrl: string;
}

const notificationSchema = new mongoose.Schema({
  title: { type: String },
  content: { type: String },
  imageUrl: { type: String },
});

const NotificationModel = mongoose.model<Notification>('Notification', notificationSchema);

export default NotificationModel;