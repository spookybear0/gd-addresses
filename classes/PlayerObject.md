This is the class for the PlayerObject, this can be any PlayerObject.

Since PlayerObject can be any player, this means that some functions will be called while on the menu, or as the second player.

Here are the known addresses:

```cpp
PlayerObject::pushButton = base + 0x1F4E40

PlayerObject::releaseButton = base + 0x1F4F70

PlayerObject::playDeathEffect = base + 0x2EFBE0

PlayerObject::playerDestroyed = base + 0x1EFAA0

PlayerObject::flipGravity = base + 0x1F59D0

PlayerObject::toggleFlyMode = base + 0x1F5E40

PlayerObject::toggleBirdMode = base + 0x1F6050 

PlayerObject::toggleRollMode = base + 0x1F68E0 

PlayerObject::toggleDartMode = base + 0x1F62C0 

PlayerObject::toggleRobotMode = base + 0x1F6A10 

PlayerObject::toggleSpiderMode = base + 0x1F94D1 

PlayerObject::updateTimeMod = base + 0x1F94E0 

PlayerObject::togglePlayerScale = base + 0x1F9640

PlayerObject::setFlipX = base + 0x1fa690

PlayerObject::setFlipY = base + 0x1fa740

PlayerObject::resetObject = base + 0x1eecd0

PlayerObject::getRealPosition = base + 0x1f7e20

PlayerObject::getOrientedBox = base + 0x1f95d0

PlayerObject::fadeOutStreak2 = base + 0x1F9110

PlayerObject::toggleGhostEffect = base + 0x1F8930

float PlayerObject.x = PlayerObject + 0x34

float PlayerObject.y = PlayerObject + 0x38

double PlayerObject.y_acceleration = PlayerObject + 0x628

float PlayerObject.hitbox_rotation = PlayerObject + 0x20

float PlayerObject.sprite_rotation = PlayerObject + 0x24

CCMotionStreak* PlayerObject.trail = PlayerObject + 0x510

HardStreak* PlayerObject.wave_trail = PlayerObject + 0x514
```
