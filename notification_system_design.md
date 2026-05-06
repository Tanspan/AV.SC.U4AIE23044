# Campus Notification-System 
# Stage 1
The notification system is used to send messages to students to update or circulate information so, students should be :
1. seeing notifications
2. mark as read
3. check unread notifications

## APIs

### GET /notifications

-returns all notifications.
Example json response:
{
  "success": true,
  "data": []
}


---

### POST /notifications/read

-marks a notification as read.
Example json request:
{
  "notificationId": 1
}
Example json response:
{
  "success": true,
  "message": "Notification marked as read"
}

---

### GET /notifications/unread-count

-returns unread notification count.
Example Response:
{
  "success": true,
  "count": 4
}

---

# Stage 2

I would use PostgreSQL database.
The database stores notification id, student id, title, message, read status, time with columns like student_id, title, message, read-status, created-at.
Advantage: Indexes can improve speed.

Example code:

CREATE INDEX idx_student
ON notifications(student_id);

---

# Stage 3

The query becomes slow when there are many notifications because filtering and sorting takes time so better solution is [rovided below which makes searching faster.

CREATE INDEX idx_notifications
ON notifications(studentID, isRead, createdAt DESC);

---

# Stage 4

Problem: If many students use the app together, the database may become slow.
To improve performance I would use Redis cache ,pagination, WebSockets, background workers etc. This reduces database load.

---

# Stage 5

Sending notifications one by one is slow for large users so a queue system is better.
Tools:
- Kafka

Flow: Request → Queue → Worker → Notification Delivery

Benefits:
- fast
- scalable
- reliable
- supports retry

# Stage 6


## Efficient Top 10 Maintenance

As new notifications arrive continuously, maintaining all notifications by sorting repeatedly is inefficient.

A better approach is:
- maintain a Min Heap of size 10
- insert new notification
- remove lowest priority notification when heap size exceeds 10


