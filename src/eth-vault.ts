import {
  AssetRedeemedWithLeveragedToken as AssetRedeemedWithLeveragedTokenEvent,
  AssetRedeemedWithPairs as AssetRedeemedWithPairsEvent,
  AssetRedeemedWithUSB as AssetRedeemedWithUSBEvent,
  LeveragedTokenBurned as LeveragedTokenBurnedEvent,
  LeveragedTokenMinted as LeveragedTokenMintedEvent,
  UpdateParamValue as UpdateParamValueEvent,
  UsbBurned as UsbBurnedEvent,
  UsbMinted as UsbMintedEvent,
  UsbToLeveragedTokens as UsbToLeveragedTokensEvent,
  YieldsSettlement as YieldsSettlementEvent
} from "../generated/ETH_Vault/ETH_Vault"
import {
  AssetRedeemedWithLeveragedToken,
  AssetRedeemedWithPairs,
  AssetRedeemedWithUSB,
  LeveragedTokenBurned,
  LeveragedTokenMinted,
  UpdateParamValue,
  UsbBurned,
  UsbMinted,
  UsbToLeveragedTokens,
  YieldsSettlement
} from "../generated/schema"

export function handleAssetRedeemedWithLeveragedToken(
  event: AssetRedeemedWithLeveragedTokenEvent
): void {
  let entity = new AssetRedeemedWithLeveragedToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.leveragedTokenAmount = event.params.leveragedTokenAmount
  entity.assetAmount = event.params.assetAmount
  entity.assetTokenPrice = event.params.assetTokenPrice
  entity.assetTokenPriceDecimals = event.params.assetTokenPriceDecimals

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAssetRedeemedWithPairs(
  event: AssetRedeemedWithPairsEvent
): void {
  let entity = new AssetRedeemedWithPairs(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.usbAmount = event.params.usbAmount
  entity.leveragedTokenAmount = event.params.leveragedTokenAmount
  entity.assetAmount = event.params.assetAmount
  entity.assetTokenPrice = event.params.assetTokenPrice
  entity.assetTokenPriceDecimals = event.params.assetTokenPriceDecimals

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAssetRedeemedWithUSB(
  event: AssetRedeemedWithUSBEvent
): void {
  let entity = new AssetRedeemedWithUSB(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.usbAmount = event.params.usbAmount
  entity.assetAmount = event.params.assetAmount
  entity.assetTokenPrice = event.params.assetTokenPrice
  entity.assetTokenPriceDecimals = event.params.assetTokenPriceDecimals

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLeveragedTokenBurned(
  event: LeveragedTokenBurnedEvent
): void {
  let entity = new LeveragedTokenBurned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.leveragedTokenAmount = event.params.leveragedTokenAmount
  entity.assetTokenPrice = event.params.assetTokenPrice
  entity.assetTokenPriceDecimals = event.params.assetTokenPriceDecimals

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLeveragedTokenMinted(
  event: LeveragedTokenMintedEvent
): void {
  let entity = new LeveragedTokenMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.assetTokenAmount = event.params.assetTokenAmount
  entity.leveragedTokenAmount = event.params.leveragedTokenAmount
  entity.assetTokenPrice = event.params.assetTokenPrice
  entity.assetTokenPriceDecimals = event.params.assetTokenPriceDecimals

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateParamValue(event: UpdateParamValueEvent): void {
  let entity = new UpdateParamValue(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.param = event.params.param
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUsbBurned(event: UsbBurnedEvent): void {
  let entity = new UsbBurned(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.usbTokenAmount = event.params.usbTokenAmount
  entity.usbSharesAmount = event.params.usbSharesAmount
  entity.assetTokenPrice = event.params.assetTokenPrice
  entity.assetTokenPriceDecimals = event.params.assetTokenPriceDecimals

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUsbMinted(event: UsbMintedEvent): void {
  let entity = new UsbMinted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.assetTokenAmount = event.params.assetTokenAmount
  entity.usbTokenAmount = event.params.usbTokenAmount
  entity.usbSharesAmount = event.params.usbSharesAmount
  entity.assetTokenPrice = event.params.assetTokenPrice
  entity.assetTokenPriceDecimals = event.params.assetTokenPriceDecimals

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUsbToLeveragedTokens(
  event: UsbToLeveragedTokensEvent
): void {
  let entity = new UsbToLeveragedTokens(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.usbAmount = event.params.usbAmount
  entity.leveragedTokenAmount = event.params.leveragedTokenAmount
  entity.assetTokenPrice = event.params.assetTokenPrice
  entity.assetTokenPriceDecimals = event.params.assetTokenPriceDecimals

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleYieldsSettlement(event: YieldsSettlementEvent): void {
  let entity = new YieldsSettlement(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.usbYieldsAmount = event.params.usbYieldsAmount
  entity.leveragedTokenYieldsAmount = event.params.leveragedTokenYieldsAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
