import {
  MatchedTokenPaid as MatchedTokenPaidEvent,
  MatchedTokensAdded as MatchedTokensAddedEvent,
  MatchingYieldsAdded as MatchingYieldsAddedEvent,
  MatchingYieldsPaid as MatchingYieldsPaidEvent,
  Staked as StakedEvent,
  StakingYieldsAdded as StakingYieldsAddedEvent,
  StakingYieldsPaid as StakingYieldsPaidEvent,
  Withdrawn as WithdrawnEvent,
} from "../generated/ETH_PtyPoolBelowAARS/ETH_PtyPoolBelowAARS"
import {
  MatchedTokenPaid,
  MatchedTokensAdded,
  MatchingYieldsAdded,
  MatchingYieldsPaid,
  Staked,
  StakingYieldsAdded,
  StakingYieldsPaid,
  Withdrawn,
} from "../generated/schema"

export function handleMatchedTokenPaid(event: MatchedTokenPaidEvent): void {
  let entity = new MatchedTokenPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMatchedTokensAdded(event: MatchedTokensAddedEvent): void {
  let entity = new MatchedTokensAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMatchingYieldsAdded(
  event: MatchingYieldsAddedEvent,
): void {
  let entity = new MatchingYieldsAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.yields = event.params.yields

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMatchingYieldsPaid(event: MatchingYieldsPaidEvent): void {
  let entity = new MatchingYieldsPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.yields = event.params.yields

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStaked(event: StakedEvent): void {
  let entity = new Staked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakingYieldsAdded(event: StakingYieldsAddedEvent): void {
  let entity = new StakingYieldsAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.yields = event.params.yields

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleStakingYieldsPaid(event: StakingYieldsPaidEvent): void {
  let entity = new StakingYieldsPaid(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.yields = event.params.yields

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawn(event: WithdrawnEvent): void {
  let entity = new Withdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.user = event.params.user
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
