import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/ETH_Vault/ETH_Vault"

export function createAssetRedeemedWithLeveragedTokenEvent(
  user: Address,
  leveragedTokenAmount: BigInt,
  assetAmount: BigInt,
  assetTokenPrice: BigInt,
  assetTokenPriceDecimals: BigInt
): AssetRedeemedWithLeveragedToken {
  let assetRedeemedWithLeveragedTokenEvent =
    changetype<AssetRedeemedWithLeveragedToken>(newMockEvent())

  assetRedeemedWithLeveragedTokenEvent.parameters = new Array()

  assetRedeemedWithLeveragedTokenEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  assetRedeemedWithLeveragedTokenEvent.parameters.push(
    new ethereum.EventParam(
      "leveragedTokenAmount",
      ethereum.Value.fromUnsignedBigInt(leveragedTokenAmount)
    )
  )
  assetRedeemedWithLeveragedTokenEvent.parameters.push(
    new ethereum.EventParam(
      "assetAmount",
      ethereum.Value.fromUnsignedBigInt(assetAmount)
    )
  )
  assetRedeemedWithLeveragedTokenEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPrice",
      ethereum.Value.fromUnsignedBigInt(assetTokenPrice)
    )
  )
  assetRedeemedWithLeveragedTokenEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPriceDecimals",
      ethereum.Value.fromUnsignedBigInt(assetTokenPriceDecimals)
    )
  )

  return assetRedeemedWithLeveragedTokenEvent
}

export function createAssetRedeemedWithPairsEvent(
  user: Address,
  usbAmount: BigInt,
  leveragedTokenAmount: BigInt,
  assetAmount: BigInt,
  assetTokenPrice: BigInt,
  assetTokenPriceDecimals: BigInt
): AssetRedeemedWithPairs {
  let assetRedeemedWithPairsEvent = changetype<AssetRedeemedWithPairs>(
    newMockEvent()
  )

  assetRedeemedWithPairsEvent.parameters = new Array()

  assetRedeemedWithPairsEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  assetRedeemedWithPairsEvent.parameters.push(
    new ethereum.EventParam(
      "usbAmount",
      ethereum.Value.fromUnsignedBigInt(usbAmount)
    )
  )
  assetRedeemedWithPairsEvent.parameters.push(
    new ethereum.EventParam(
      "leveragedTokenAmount",
      ethereum.Value.fromUnsignedBigInt(leveragedTokenAmount)
    )
  )
  assetRedeemedWithPairsEvent.parameters.push(
    new ethereum.EventParam(
      "assetAmount",
      ethereum.Value.fromUnsignedBigInt(assetAmount)
    )
  )
  assetRedeemedWithPairsEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPrice",
      ethereum.Value.fromUnsignedBigInt(assetTokenPrice)
    )
  )
  assetRedeemedWithPairsEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPriceDecimals",
      ethereum.Value.fromUnsignedBigInt(assetTokenPriceDecimals)
    )
  )

  return assetRedeemedWithPairsEvent
}

export function createAssetRedeemedWithUSBEvent(
  user: Address,
  usbAmount: BigInt,
  assetAmount: BigInt,
  assetTokenPrice: BigInt,
  assetTokenPriceDecimals: BigInt
): AssetRedeemedWithUSB {
  let assetRedeemedWithUsbEvent = changetype<AssetRedeemedWithUSB>(
    newMockEvent()
  )

  assetRedeemedWithUsbEvent.parameters = new Array()

  assetRedeemedWithUsbEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  assetRedeemedWithUsbEvent.parameters.push(
    new ethereum.EventParam(
      "usbAmount",
      ethereum.Value.fromUnsignedBigInt(usbAmount)
    )
  )
  assetRedeemedWithUsbEvent.parameters.push(
    new ethereum.EventParam(
      "assetAmount",
      ethereum.Value.fromUnsignedBigInt(assetAmount)
    )
  )
  assetRedeemedWithUsbEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPrice",
      ethereum.Value.fromUnsignedBigInt(assetTokenPrice)
    )
  )
  assetRedeemedWithUsbEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPriceDecimals",
      ethereum.Value.fromUnsignedBigInt(assetTokenPriceDecimals)
    )
  )

  return assetRedeemedWithUsbEvent
}

export function createLeveragedTokenBurnedEvent(
  user: Address,
  leveragedTokenAmount: BigInt,
  assetTokenPrice: BigInt,
  assetTokenPriceDecimals: BigInt
): LeveragedTokenBurned {
  let leveragedTokenBurnedEvent = changetype<LeveragedTokenBurned>(
    newMockEvent()
  )

  leveragedTokenBurnedEvent.parameters = new Array()

  leveragedTokenBurnedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  leveragedTokenBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "leveragedTokenAmount",
      ethereum.Value.fromUnsignedBigInt(leveragedTokenAmount)
    )
  )
  leveragedTokenBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPrice",
      ethereum.Value.fromUnsignedBigInt(assetTokenPrice)
    )
  )
  leveragedTokenBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPriceDecimals",
      ethereum.Value.fromUnsignedBigInt(assetTokenPriceDecimals)
    )
  )

  return leveragedTokenBurnedEvent
}

export function createLeveragedTokenMintedEvent(
  user: Address,
  assetTokenAmount: BigInt,
  leveragedTokenAmount: BigInt,
  assetTokenPrice: BigInt,
  assetTokenPriceDecimals: BigInt
): LeveragedTokenMinted {
  let leveragedTokenMintedEvent = changetype<LeveragedTokenMinted>(
    newMockEvent()
  )

  leveragedTokenMintedEvent.parameters = new Array()

  leveragedTokenMintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  leveragedTokenMintedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenAmount",
      ethereum.Value.fromUnsignedBigInt(assetTokenAmount)
    )
  )
  leveragedTokenMintedEvent.parameters.push(
    new ethereum.EventParam(
      "leveragedTokenAmount",
      ethereum.Value.fromUnsignedBigInt(leveragedTokenAmount)
    )
  )
  leveragedTokenMintedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPrice",
      ethereum.Value.fromUnsignedBigInt(assetTokenPrice)
    )
  )
  leveragedTokenMintedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPriceDecimals",
      ethereum.Value.fromUnsignedBigInt(assetTokenPriceDecimals)
    )
  )

  return leveragedTokenMintedEvent
}

export function createUpdateParamValueEvent(
  param: Bytes,
  value: BigInt
): UpdateParamValue {
  let updateParamValueEvent = changetype<UpdateParamValue>(newMockEvent())

  updateParamValueEvent.parameters = new Array()

  updateParamValueEvent.parameters.push(
    new ethereum.EventParam("param", ethereum.Value.fromFixedBytes(param))
  )
  updateParamValueEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return updateParamValueEvent
}

export function createUsbBurnedEvent(
  user: Address,
  usbTokenAmount: BigInt,
  usbSharesAmount: BigInt,
  assetTokenPrice: BigInt,
  assetTokenPriceDecimals: BigInt
): UsbBurned {
  let usbBurnedEvent = changetype<UsbBurned>(newMockEvent())

  usbBurnedEvent.parameters = new Array()

  usbBurnedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  usbBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "usbTokenAmount",
      ethereum.Value.fromUnsignedBigInt(usbTokenAmount)
    )
  )
  usbBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "usbSharesAmount",
      ethereum.Value.fromUnsignedBigInt(usbSharesAmount)
    )
  )
  usbBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPrice",
      ethereum.Value.fromUnsignedBigInt(assetTokenPrice)
    )
  )
  usbBurnedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPriceDecimals",
      ethereum.Value.fromUnsignedBigInt(assetTokenPriceDecimals)
    )
  )

  return usbBurnedEvent
}

export function createUsbMintedEvent(
  user: Address,
  assetTokenAmount: BigInt,
  usbTokenAmount: BigInt,
  usbSharesAmount: BigInt,
  assetTokenPrice: BigInt,
  assetTokenPriceDecimals: BigInt
): UsbMinted {
  let usbMintedEvent = changetype<UsbMinted>(newMockEvent())

  usbMintedEvent.parameters = new Array()

  usbMintedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  usbMintedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenAmount",
      ethereum.Value.fromUnsignedBigInt(assetTokenAmount)
    )
  )
  usbMintedEvent.parameters.push(
    new ethereum.EventParam(
      "usbTokenAmount",
      ethereum.Value.fromUnsignedBigInt(usbTokenAmount)
    )
  )
  usbMintedEvent.parameters.push(
    new ethereum.EventParam(
      "usbSharesAmount",
      ethereum.Value.fromUnsignedBigInt(usbSharesAmount)
    )
  )
  usbMintedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPrice",
      ethereum.Value.fromUnsignedBigInt(assetTokenPrice)
    )
  )
  usbMintedEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPriceDecimals",
      ethereum.Value.fromUnsignedBigInt(assetTokenPriceDecimals)
    )
  )

  return usbMintedEvent
}

export function createUsbToLeveragedTokensEvent(
  user: Address,
  usbAmount: BigInt,
  leveragedTokenAmount: BigInt,
  assetTokenPrice: BigInt,
  assetTokenPriceDecimals: BigInt
): UsbToLeveragedTokens {
  let usbToLeveragedTokensEvent = changetype<UsbToLeveragedTokens>(
    newMockEvent()
  )

  usbToLeveragedTokensEvent.parameters = new Array()

  usbToLeveragedTokensEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  usbToLeveragedTokensEvent.parameters.push(
    new ethereum.EventParam(
      "usbAmount",
      ethereum.Value.fromUnsignedBigInt(usbAmount)
    )
  )
  usbToLeveragedTokensEvent.parameters.push(
    new ethereum.EventParam(
      "leveragedTokenAmount",
      ethereum.Value.fromUnsignedBigInt(leveragedTokenAmount)
    )
  )
  usbToLeveragedTokensEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPrice",
      ethereum.Value.fromUnsignedBigInt(assetTokenPrice)
    )
  )
  usbToLeveragedTokensEvent.parameters.push(
    new ethereum.EventParam(
      "assetTokenPriceDecimals",
      ethereum.Value.fromUnsignedBigInt(assetTokenPriceDecimals)
    )
  )

  return usbToLeveragedTokensEvent
}

export function createYieldsSettlementEvent(
  usbYieldsAmount: BigInt,
  leveragedTokenYieldsAmount: BigInt
): YieldsSettlement {
  let yieldsSettlementEvent = changetype<YieldsSettlement>(newMockEvent())

  yieldsSettlementEvent.parameters = new Array()

  yieldsSettlementEvent.parameters.push(
    new ethereum.EventParam(
      "usbYieldsAmount",
      ethereum.Value.fromUnsignedBigInt(usbYieldsAmount)
    )
  )
  yieldsSettlementEvent.parameters.push(
    new ethereum.EventParam(
      "leveragedTokenYieldsAmount",
      ethereum.Value.fromUnsignedBigInt(leveragedTokenYieldsAmount)
    )
  )

  return yieldsSettlementEvent
}
