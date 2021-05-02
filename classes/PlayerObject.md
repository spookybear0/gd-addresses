This is the class for the PlayerObject, this can be any PlayerObject.

Since PlayerObject can be any player, this means that some functions will be called while on the menu, or as the second player.

Here are the known addresses:

```cpp
PlayerObject::init = base + 0x1E6DA0

void __thiscall PlayerObject::pushButton(PlayerObject*, PlayerButton player_button) = base + 0x1F4E40;

void __thiscall PlayerObject::releaseButton(PlayerObject*, PlayerButton player_button) = base + 0x1F4F70;

void __thiscall PlayerObject::playDeathEffect(PlayerObject*) = base + 0x2EFBE0;

void __thiscall PlayerObject::playerDestroyed(PlayerObject*, bool destroyed) = base + 0x1EFAA0;

void __thiscall PlayerObject::flipGravity(PlayerObject*, bool m_unknown_1, bool m_unknown_2) = base + 0x1F59D0;

void __thiscall PlayerObject::toggleFlyMode(PlayerObject*, bool toggle) = base + 0x1F5E40;

void __thiscall PlayerObject::toggleBirdMode(PlayerObject*, bool toggle) = base + 0x1F6050;

void __thiscall PlayerObject::toggleRollMode(PlayerObject*, bool toggle) = base + 0x1F68E0;

void __thiscall PlayerObject::toggleDartMode(PlayerObject*, bool toggle) = base + 0x1F62C0;

void __thiscall PlayerObject::toggleRobotMode(PlayerObject*, bool toggle) = base + 0x1F6A10;

void __thiscall PlayerObject::toggleSpiderMode(PlayerObject*, bool toggle) = base + 0x1F94D1;

void __thiscall PlayerObject::updateTimeMod(PlayerObject*, float time) = base + 0x1F94E0;

void __thiscall PlayerObject::togglePlayerScale(PlayerObject*, bool toggle) = base + 0x1F9640;

void __thiscall PlayerObject::setFlipX(PlayerObject*, bool flip) = base + 0x1FA690;

void __thiscall PlayerObject::setFlipY(PlayerObject*, bool flip) = base + 0x1FA740;

void __thiscall PlayerObject::resetObject(PlayerObject*) = base + 0x1EECD0;

CCPoint __thiscall PlayerObject::getRealPosition(PlayerObject*) = base + 0x1F7E20;

m_250h_undefined __thiscall PlayerObject::getOrientedBox(PlayerObject*) = base + 0x1F95D0;

void __thiscall PlayerObject::fadeOutStreak2(PlayerObject*, float m_unknown_1) = base + 0x1F9110;

void __thiscall PlayerObject::toggleGhostEffect(PlayerObject*, GhostType type) = base + 0x1F8930;

float PlayerObject.x = PlayerObject + 0x67C;

float PlayerObject.y = PlayerObject + 0x680;

double PlayerObject.y_acceleration = PlayerObject + 0x628;

CCMotionStreak* PlayerObject.trail = PlayerObject + 0x510;

HardStreak* PlayerObject.wave_trail = PlayerObject + 0x514;
```
