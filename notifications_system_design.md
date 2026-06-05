import java.util.*;

class Notification {
    String title;
    String category;
    String createdAt;

    Notification(String title, String category, String createdAt) {
        this.title = title;
        this.category = category;
        this.createdAt = createdAt;
    }

    @Override
    public String toString() {
        return title + " | " + category + " | " + createdAt;
    }
}

public class Question1 {

    public static void main(String[] args) {

        List<Notification> notifications = new ArrayList<>();

        notifications.add(new Notification("Amazon Hiring Drive", "Placement", "2026-06-05"));
        notifications.add(new Notification("Microsoft Placement Drive", "Placement", "2026-06-04"));
        notifications.add(new Notification("TCS Recruitment", "Placement", "2026-06-03"));
        notifications.add(new Notification("Semester Results", "Result", "2026-06-05"));
        notifications.add(new Notification("Mid Results", "Result", "2026-06-02"));
        notifications.add(new Notification("Tech Fest", "Event", "2026-06-06"));
        notifications.add(new Notification("Coding Contest", "Event", "2026-06-04"));
        notifications.add(new Notification("Library Notice", "General", "2026-06-05"));
        notifications.add(new Notification("Hostel Meeting", "General", "2026-06-03"));
        notifications.add(new Notification("Sports Day", "Event", "2026-06-02"));
        notifications.add(new Notification("Workshop", "Event", "2026-06-01"));
        notifications.add(new Notification("Hackathon", "Event", "2026-05-31"));

        Map<String, Integer> priority = new HashMap<>();
        priority.put("Placement", 1);
        priority.put("Result", 2);
        priority.put("Event", 3);

        notifications.sort((a, b) -> {
            int p1 = priority.getOrDefault(a.category, Integer.MAX_VALUE);
            int p2 = priority.getOrDefault(b.category, Integer.MAX_VALUE);

            if (p1 != p2) {
                return Integer.compare(p1, p2);
            }

            return b.createdAt.compareTo(a.createdAt);
        });

        int top = Math.min(10, notifications.size());

        System.out.println("Top " + top + " Notifications:\n");

        for (int i = 0; i < top; i++) {
            System.out.println((i + 1) + ". " + notifications.get(i));
        }
    }
}
