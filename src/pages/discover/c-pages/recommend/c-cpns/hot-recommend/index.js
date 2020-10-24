import React, { memo } from 'react'
import { HOT_RECOMMEND_LIMIT } from "@/common/contants"
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYSongsCover from '@/components/songs-cover';

import {
  HotRecommendWrapper
} from './style'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { useEffect } from 'react'
import { getHotRecommendAction } from '../../store/actionCreators'


export default memo(function HYHotRecommend() {
  //state

  //redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch();

  //other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
  }, [dispatch]);

  return (
    <div>
      <HotRecommendWrapper>
        <HYThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "民谣", "摇滚", "电子"]}></HYThemeHeaderRCM>
        <div className="recommend-list">
          {
            hotRecommends.map((item, index) => {
              return (
                <HYSongsCover key={item.id} info={item} ></HYSongsCover> 
              )
            })
          }

        </div>
      </HotRecommendWrapper>
    </div>
  )
})
