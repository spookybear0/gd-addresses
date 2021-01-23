This class allows you to show an achievement message.

Showing the achievement should be called from the main thread (like from a button press, etc.)

Here are the known addresses:

```
AchievementBar::show = base + 0x3BE50

AchievementBar::sharedState = base + 0xfc90

AchievementBar::create = base + 0x3B120

AchievementBar::showNextAchievement = base + 0xfd60
```