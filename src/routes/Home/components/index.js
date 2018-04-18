import React from 'react';
import { connect } from 'dva';
import './style.less';
import BaseComponent from 'components/BaseComponent';
import TOP_IMG1 from 'assets/images/home_top_img1.png'
import TOP_IMG2 from 'assets/images/home_top_img2.png'
import TOP_IMG3 from 'assets/images/home_top_img3.png'
import MAP_ICON from 'assets/images/home_map_icon.png'
import POSITION_ICON from 'assets/images/home_posi_icon.png'


@connect(state=>({
        home: state.home
    }))
export default class Home extends BaseComponent {
constructor(props){
    super(props);
    this.state={

    }
}
componentDidMount(){
    const BMap=window.BMap
    let map = new BMap.Map('home_map') // 创建Map实例
    map.centerAndZoom(new BMap.Point(121.4, 31.2), 11)
}
    render() {
        return (
            <div className="home-page">
                <div className="home_top">
                    <div className="home_top_item">
                        <div>
                            <img src={TOP_IMG1} alt=""/>
                        </div>
                        <h1>1581<br/><small>总控制器数量</small></h1>
                    </div>
                    <div className="home_top_item">
                        <div>
                            <img src={TOP_IMG2} alt=""/>
                        </div>
                        <h1>2081<br/><small>在线控制器数量</small></h1>
                    </div>
                    <div className="home_top_item">
                        <div>
                            <img src={TOP_IMG3} alt=""/>
                        </div>
                        <h1>10<br/><small>故障控制器数量</small></h1>
                    </div>
                </div>
                <div className="home_bottom">
                    <div id="home_map" style={{height:window.screen.availHeight-390}}/>
                    <div className="home_b_b">
                        <p><img src={MAP_ICON} alt=""/></p>
                        <p><img src={POSITION_ICON} alt=""/>控制器</p>
                    </div>
                </div>
            </div>
        )
    }
}