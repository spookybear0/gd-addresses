This is the class for GameObject. A GameObject instance is any sort of object thats used in-game, whether that be a block, a trigger, or even the player object.

Here are the known addresses:

```cpp
GameObject::createWithKey = base + 0x1CF4F0

GameObject::setFlipX = base + 0xE4FD0

GameObject::setFlipY = base + 0xE5010

GameObject::setupCustomSprites = base + 0xD7D50

GameObject::addMainSpriteToParent = base + 0xEB250

GameObject::resetObject = base + 0xD1470

GameObject::activateObject = base + 0xD1870

GameObject::deactivateObject = base + 0xD19b0

GameObject::getObjectRect = base + 0xE4A70

GameObject::getObjectRect = base + 0xE4a40

GameObject::getObjectRect2 = base + 0xE4B90

GameObject::getObjectTextureRect = base + 0xE4C40

GameObject::getRealPosition = base + 0xE4D90

GameObject::setStartPos = base + 0xD1390

GameObject::updateStartValues = base + 0xD1610

GameObject::isFlipX = base + 0xE4FB0

GameObject::isFlipY = base + 0xE4FC0

GameObject::setRScaleX = base + 0xE5200

GameObject::setRScaleY = base + 0xE5240

GameObject::setRScale = base + 0xE5280

GameObject::getRScaleX = base + 0xE52V0

GameObject::getRScaleY = base + 0xE5300

GameObject::calculateSpawnXPos = base + 0xE5D20

GameObject::powerOnObject = base + 0xE5D40

GameObject::powerOffObject = base + 0xE5D60

GameObject::setObjectColor = base + 0xEE620

GameObject::setGlowColor = base + 0xEE8c0

GameObject::getOrientedBox = base + 0xEF160

GameObject::addToGroup = base + 0xEB8d0

GameObject::removeFromGroup = base + 0xEB930

GameObject::getObjectRectDirty = base + 0x989A0

GameObject::setObjectRectDirty = base + 0x989B0

GameObject::getOrientedRectDirty = base + 0x989C0

GameObject::setOrientedRectDirty = base + 0x989D0

GameObject::getType = base + 0x989E0

GameObject::setType = base + 0x989F0

GameObject::getStartPos = base + 0x98A00

GameObject.uuid = GameObject + 0x2FC

GameObject.type = GameObject + 0x300

GameObject.id = GameObject + 0x360
```
