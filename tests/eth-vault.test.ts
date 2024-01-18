import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { AssetRedeemedWithLeveragedToken } from "../generated/schema"
import { AssetRedeemedWithLeveragedToken as AssetRedeemedWithLeveragedTokenEvent } from "../generated/ETH_Vault/ETH_Vault"
import { handleAssetRedeemedWithLeveragedToken } from "../src/eth-vault"
import { createAssetRedeemedWithLeveragedTokenEvent } from "./eth-vault-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let leveragedTokenAmount = BigInt.fromI32(234)
    let assetAmount = BigInt.fromI32(234)
    let assetTokenPrice = BigInt.fromI32(234)
    let assetTokenPriceDecimals = BigInt.fromI32(234)
    let newAssetRedeemedWithLeveragedTokenEvent =
      createAssetRedeemedWithLeveragedTokenEvent(
        user,
        leveragedTokenAmount,
        assetAmount,
        assetTokenPrice,
        assetTokenPriceDecimals
      )
    handleAssetRedeemedWithLeveragedToken(
      newAssetRedeemedWithLeveragedTokenEvent
    )
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AssetRedeemedWithLeveragedToken created and stored", () => {
    assert.entityCount("AssetRedeemedWithLeveragedToken", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AssetRedeemedWithLeveragedToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AssetRedeemedWithLeveragedToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "leveragedTokenAmount",
      "234"
    )
    assert.fieldEquals(
      "AssetRedeemedWithLeveragedToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetAmount",
      "234"
    )
    assert.fieldEquals(
      "AssetRedeemedWithLeveragedToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetTokenPrice",
      "234"
    )
    assert.fieldEquals(
      "AssetRedeemedWithLeveragedToken",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "assetTokenPriceDecimals",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
