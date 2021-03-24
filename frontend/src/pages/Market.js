import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroller'
import useSWR from 'swr'

import { BidPreview } from '../components/BidPreview'
import { mapStats } from '../components/Helpers'

const FetchLimit = 25

function MarketPage (props) {
  const claimsOnly = !!props.claimsOnly

  const [feed, setFeed] = useState([])
  const [hasMore, setHasMore] = useState(false)

  const fetchStats = async (...args) => {
    return mapStats(await props._near.contract.get_global_stats())
  }

  const fetchBidsOnClaim = async (...args) => {
    return (await props._near.contract.get_top_claims({
      from_key: null,
      limit: FetchLimit
    })).length
  }

  const { data: stats } = useSWR('global_stats', fetchStats, { errorRetryInterval: 500 })
  const { data: numBidsOnClaim } = useSWR('bids_on_claim', fetchBidsOnClaim, { errorRetryInterval: 500 })

  const fetchMore = async () => {
    const f = [...feed]
    const lastKey = f.length > 0 ? f[f.length - 1] : null
    let fetched
    if (claimsOnly) {
      fetched = await props._near.contract.get_top_claims({
        from_key: lastKey,
        limit: FetchLimit
      })
    } else {
      fetched = await props._near.contract.get_top_bets({
        from_key: lastKey,
        limit: FetchLimit
      })
    }
    f.push(...fetched)
    if (fetched.length === 0) {
      setHasMore(false)
    }
    setFeed(f)
  }

  useEffect(() => {
    if (props.connected) {
      setHasMore(true)
    }
  }, [props.connected])

  const bids = feed.map(([bidPrice, bidId]) => {
    return (
      <BidPreview {...props} key={bidId} bidId={bidId} />
    )
  })

  const loader = (
    // key='1' is needed by InfiniteScroll
    <div key='1' className='d-flex justify-content-center'>
      <div className='spinner-grow' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )

  const marketActive = claimsOnly ? 'nonavigate' : 'navigate'
  const claimsActive = claimsOnly ? 'navigate' : 'nonavigate'

  return stats ? (
    <div>
      <div className='container g-0 px-5'>
        <div className='d-flex flex-row bd-highlight mb-3'>
          <div className='py-2 bd-highlight'>
            <h5>
              <Link className={` ${marketActive}`} to='/market' onClick={(e) => { if (claimsOnly) { setFeed([]); setHasMore(true) } }}>
            Active bids ({stats.numBids})
              </Link>
            </h5>
          </div>
          <div className='p-2 bd-highlight' />
          <div className='p-2 bd-highlight'>
            <h5>
              <Link className={` ${claimsActive}`} to='/claims' onClick={(e) => { if (!claimsOnly) { setFeed([]); setHasMore(true) } }}>
            On claim ({numBidsOnClaim || '0'})
              </Link>
            </h5>
          </div>
        </div>
      </div>
      <div className='container g-0 px-5'>
        <InfiniteScroll
          pageStart={0}
          loadMore={fetchMore}
          hasMore={hasMore}
          loader={loader}
        >
          {bids}
        </InfiniteScroll>
      </div>
    </div>
  ) : (loader)
}

export default MarketPage
