This is the layer of gd where the level and player resides.

Here are the known addresses:

```
PlayLayer::create = base + 0x1FB6D0

PlayLayer::init = base + 0x01FB780

PlayLayer::update = base + 0x2029C0

PlayLayer::updateReplay = base + 0x20AF40

PlayLayer::releaseButton = base + 0x1F4F70

PlayLayer::pushButton = base + 0x111500

PlayLayer.Player2 = PlayLayer + 0x228

PlayLayer.Player1 = PlayLayer + 0x224

PlayLayer.PlayerObject = PlayLayer + 0x224

PlayLayer.time = PlayLayer + 0x450

PlayLayer::onQuit = base + 0x20D810

PlayLayer::levelComplete = base + 0x1FD3D0

PlayLayer.isDead = PlayLayer + 0x39C

PlayLayer.levelLength = PlayLayer + 0x3B4

PlayLayer.isPractice = PlayLayer + 0x495

PlayLayer.currentAttempt = PlayLayer + 0x4A8

PlayLayer::timeForXPos2 = base + 0x1FD3D0

PlayLayer::togglePracticeMode = base + 0x20D0D1

PlayLayer::destroyPlayer = base + 0x20A1A0

PlayLayer::markCheckpoint = base + 0x25FB60

PlayLayer::removeLastCheckpoint = base + 0x20B830

PlayLayer::getCapacityString = base + 0x10C9B0

PlayLayer::updateAttempts = base + 0x20CED0

PlayLayer::resetLevel = base + 0x20BF00
```