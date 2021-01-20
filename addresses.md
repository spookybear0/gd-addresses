```
FLAlertLayer::create = base + 0x227E0
```



```
PlayLayer::init = base + 0x01FB780

PlayLayer::update = base + 0x2029C0

PlayLayer::releaseButton = base + 0x1F4F70

PlayLayer::pushButton = base + 0x111500

PlayLayer::Player2 = PlayLayer + 0x228

PlayLayer::PlayerObject = PlayLayer + 0x224

PlayLayer::onQuit = base + 0x20D810

PlayLayer::levelComplete = base + 0x1FD3D0
```



```
MainLayer::init = base + 0x1907b0

MenuLayer::init = base + 0x1907b0
```



```
AchievementManager::sharedState = base + 0xFC90

AchievementManager::notifyAchievement = base + 0x3B120

AchievementManager::show = base + 0x3BE50 (should be used on notifyAchievement)
```



```
AchievementBar::show = base + 0x3BE50

AchievementBar::sharedState = base + 0xfc90

AchievementBar::create = base + 0x3B120

AchievementBar::showNextAchievement = base + 0xfd60
```



```
GameManager::getSharedState = base + 0xC4A50

GameManager::getGameVariable = base + 0xC9D30

GameManager::PlayLayer = GameManager + 0x164
```



```
MenuOptions::init = base + 0x1DE8F0

MenuOptions::addToggle = base + 0x1DF6B0
```



```
OnlineMenuLayer::init = base + 0x4DE40
```



```
PlayerObject::pushButtonHook = base + 0x1F4E40

PlayerObject::releaseButtonHook = base + 0x1F4F70

float PlayerObject.x = PlayerObject + 0x34

float PlayerObject.y = PlayerObject + 0x38
```



```
PauseLayer::init = base + 0x1E4620
```



```
SelectLayer::init = base + 0x15A040

SelectLayer::currentMenu = SelectLayer + 0xEC
```



These are the screen ids for the currentMenu 
```
My Levels            0x62
Saved Levels         0x63
Featured             0x6
Hall of Fame         0x10
Map Packs            0x9
Search               0x0
Most downloaded      0x1
Most liked           0x2
Trending             0x3
Recent               0x4
Magic                0x7
Awarded              0xB
Followed             0xC
Friends              0xD
Find Users           0xE
Users Levels         0x5
```



```
SupportLayer::init = base + 0x25CB70
```



```
GameSoundManager::sharedState = base + 0x24800

GameSoundManager::playEffect = base + 0x25450 

EditLevelLayer::init = base + 0x6F5D0
```