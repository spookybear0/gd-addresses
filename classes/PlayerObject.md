This is the class for the PlayerObject, this can be any PlayerObject.

Since PlayerObject can be any player, this means that some functions will be called while on the menu, or as the second player.

Here are the known addresses:

```cpp
PlayerObject::pushButton = base + 0x1F4E40

PlayerObject::releaseButton = base + 0x1F4F70

PlayerObject::playDeathEffect = base + 0x2EFBE0

float PlayerObject.x = PlayerObject + 0x34

float PlayerObject.y = PlayerObject + 0x38

double PlayerObject.y_acceleration = PlayerObject + 0x628

float PlayerObject.hitbox_rotation = PlayerObject + 0x20

float PlayerObject.sprite_rotation = PlayerObject + 0x24
```
