This class allows you to show an achievement message.

This class can also manage achievements, but for now, those addresses are not known.

Showing the achievement should be called from the main thread (like from a button press, etc.)

Here are the known addresses:

```
AchievementManager::sharedState = base + 0xFC90

AchievementManager::notifyAchievement = base + 0x3B120

AchievementManager::show = base + 0x3BE50 (should be used on notifyAchievement)
```