import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  MatchedTokenPaid,
  MatchedTokensAdded,
  MatchingYieldsAdded,
  MatchingYieldsPaid,
  Staked,
  StakingYieldsAdded,
  StakingYieldsPaid,
  Withdrawn
} from "../generated/ETH_PtyPoolBelowAARS/ETH_PtyPoolBelowAARS"

export function createMatchedTokenPaidEvent(
  user: Address,
  amount: BigInt
): MatchedTokenPaid {
  let matchedTokenPaidEvent = changetype<MatchedTokenPaid>(newMockEvent())

  matchedTokenPaidEvent.parameters = new Array()

  matchedTokenPaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  matchedTokenPaidEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return matchedTokenPaidEvent
}

export function createMatchedTokensAddedEvent(
  amount: BigInt
): MatchedTokensAdded {
  let matchedTokensAddedEvent = changetype<MatchedTokensAdded>(newMockEvent())

  matchedTokensAddedEvent.parameters = new Array()

  matchedTokensAddedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return matchedTokensAddedEvent
}

export function createMatchingYieldsAddedEvent(
  yields: BigInt
): MatchingYieldsAdded {
  let matchingYieldsAddedEvent = changetype<MatchingYieldsAdded>(newMockEvent())

  matchingYieldsAddedEvent.parameters = new Array()

  matchingYieldsAddedEvent.parameters.push(
    new ethereum.EventParam("yields", ethereum.Value.fromUnsignedBigInt(yields))
  )

  return matchingYieldsAddedEvent
}

export function createMatchingYieldsPaidEvent(
  user: Address,
  yields: BigInt
): MatchingYieldsPaid {
  let matchingYieldsPaidEvent = changetype<MatchingYieldsPaid>(newMockEvent())

  matchingYieldsPaidEvent.parameters = new Array()

  matchingYieldsPaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  matchingYieldsPaidEvent.parameters.push(
    new ethereum.EventParam("yields", ethereum.Value.fromUnsignedBigInt(yields))
  )

  return matchingYieldsPaidEvent
}

export function createStakedEvent(user: Address, amount: BigInt): Staked {
  let stakedEvent = changetype<Staked>(newMockEvent())

  stakedEvent.parameters = new Array()

  stakedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  stakedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return stakedEvent
}

export function createStakingYieldsAddedEvent(
  yields: BigInt
): StakingYieldsAdded {
  let stakingYieldsAddedEvent = changetype<StakingYieldsAdded>(newMockEvent())

  stakingYieldsAddedEvent.parameters = new Array()

  stakingYieldsAddedEvent.parameters.push(
    new ethereum.EventParam("yields", ethereum.Value.fromUnsignedBigInt(yields))
  )

  return stakingYieldsAddedEvent
}

export function createStakingYieldsPaidEvent(
  user: Address,
  yields: BigInt
): StakingYieldsPaid {
  let stakingYieldsPaidEvent = changetype<StakingYieldsPaid>(newMockEvent())

  stakingYieldsPaidEvent.parameters = new Array()

  stakingYieldsPaidEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  stakingYieldsPaidEvent.parameters.push(
    new ethereum.EventParam("yields", ethereum.Value.fromUnsignedBigInt(yields))
  )

  return stakingYieldsPaidEvent
}

export function createWithdrawnEvent(user: Address, amount: BigInt): Withdrawn {
  let withdrawnEvent = changetype<Withdrawn>(newMockEvent())

  withdrawnEvent.parameters = new Array()

  withdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawnEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawnEvent
}
