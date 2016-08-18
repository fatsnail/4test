'use strict'
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Hover from '../actions/hover';
import * as ItemHover from '../actions/searchItemBox';

import Nav2 from './nav2';

class Nav1 extends Component{
	render(){
		return (
			
			<div>
				<div class="icon-layer">
    				<span class="Jia-nav-icon1"></span>
    			</div>
    			<div class="ln-layer">
    				<a href="http://www.jia.com/shanghai/" data-tjjj="2014.nav.home" id="jia_nav_home" class="fst-ln">首页</a>
    			</div>
			</div>
    			
		)
	}
};

class Nav3 extends Component{
	render(){
		return (
			
				<div>
	    			<div class="icon-layer">
	    				<span class="Jia-nav-icon3"></span>
	    			</div>
	    			<div class="ln-layer">
	    				<a id="jia_nav_mall" href="http://tg.jia.com/shanghai/55" data-tjjj="2014.nav.mallchannel" class="fst-ln">买建材家居</a>
	    				<i></i>
	    				<ul class="snd-ul">
	    					<li id="jia_nav_tg"><a href="http://tg.jia.com/shanghai/" data-tjjj="2014.nav.tg">现场团购</a></li>
	    					<li id="jia_nav_submall"><a href="http://mall.jia.com/shanghai/" data-tjjj="2014.nav.mall">建材商城</a></li>
	    					<li id="jia_nav_jiaju"><a href="http://jiaju.jia.com/shanghai/" data-tjjj="2014.nav.jiaju">家居商城</a></li>
	    					<li id="jia_nav_tm"><a href="http://tm.jia.com/" data-tjjj="2014.nav.temai">品牌特卖</a></li>
							<li id="jia_nav_pttiyan"><a href="http://pinpai.jia.com/shanghai/putuo.html" data-tjjj="2014.nav.ptpinpai">普陀线下体验馆</a></li>	        					
							<li id="jia_nav_tiyan"><a href="http://pinpai.jia.com/shanghai/" data-tjjj="2014.nav.pinpai">宝山线下体验馆</a></li>
	    				</ul>
	    			</div>
	    		</div>
    		
		)
	}
};
class Nav4 extends Component{
	render(){
		return (
			
				<div>
	    			<div class="icon-layer">
	    				<span class="Jia-nav-icon4"></span>
	    			</div>
	    			<div class="ln-layer">
	    				<a href="http://www.jia.com/xuezx/" data-tjjj="2014.nav.xuezx" class="fst-ln">学装修</a>
	    				<i></i>
	    				<ul class="snd-ul">
	    					<li id="jia_nav_tuku" class=""><a href="http://tuku.jia.com/" data-tjjj="2014.nav.tuku">图库</a></li>
	    					<li id="jia_nav_xue" class=""><a href="http://zixun.jia.com/" data-tjjj="2014.nav.xue">资讯</a></li>
	    					<li id="jia_nav_ask" class=""><a href="http://ask.jia.com/" data-tjjj="2014.nav.ask">问答</a></li>
	    					<li id="jia_nav_bbs" class=""><a href="http://bbs.jia.com/shanghai/" data-tjjj="2014.nav.bbs">论坛</a></li>
	    				</ul>
	    			</div>
	    		</div>
    		
		)
	}
};
var arr=[
	<Nav1 />,<Nav2 />,<Nav3 />,<Nav4 />
];
class Nav extends Component{
	
	render(){
		let show=this.props.searchHoverReducer?'Jia-search-item Jia-item-over':'Jia-search-item';
		var con=arr.map((tag,index)=>{
					var sClass='',id='';
					switch(index)
					{
						case 0:{
							sClass='Jia-index fst-li current-nav';
							break;
						}
						case 1:{
							sClass='Jia-zzx with-sub-nav fst-li';
							id='nav_zzx';
							break;
						}
						case 2:{
							sClass='Jia-mjc with-sub-nav fst-li';
							id='nav_mjc';
							break;
						}
						case 3:{
							sClass='Jia-xzx with-sub-nav fst-li';
							id='nav_xzx';
							break;
						}
					}
					if(index==this.props.hoverIndex)
					{
						sClass+=' enter-nav';
					}
					return <li key={index} class={sClass} id={id} onMouseEnter={()=>this.props.mouseOver(index)} onMouseLeave={()=>this.props.mouseLeave()}>{tag}</li>
				});
		return (
			<div id="Jia-header-2016" class="Jia-header-2016">
				
		    	<div class="Jia-header-main">
		    		<div class="jia_logo clearfix fl">
			            <div class="logo fl">
			                <a href="http://www.jia.com/shanghai/" data-tjjj="head.logo.jia" target="_top">
			                	<img src="http://www.jia.com/logo/logo.gif" width="121" height="75" alt="齐家网首页" />
			                </a>
			            </div>
			            <div class="fl">
			                <img src="http://fastued3.jia.com/image/common/act.gif" width="76" height="75" />
			            </div>
			        </div>
			        <div class="Jia-nav-2016 fl">
			        	<ul class="clearfix fst-ul">		
			        		  {con}
			        	</ul>
			        </div>
			        <div class="Jia-main-r clearfix">
						<div class="Jia-search-box fl clearfix">
							<form action="http://mall.jia.com/shanghai/list" class="Jia-search-form fl clearfix" method="get" name="form_search">
								<div class={show} onMouseLeave={()=>this.props.searchItemLeave()} onMouseEnter={()=>this.props.searchItemEnter()}>
									<span>商品<em></em></span>
									<ul>
										<li><a href="javascript:;" data-tjjj="head.search.mod">店铺</a></li>
										<li><a href="javascript:;" data-tjjj="head.search.pics">图库</a></li>
										<li><a href="javascript:;" data-tjjj="head.search.fitment">装修公司</a></li>
										<li><a href="javascript:;" data-tjjj="head.search.bbs">论坛</a></li>                               
										<li><a href="javascript:;" data-tjjj="head.search.zixun">资讯</a></li>
									</ul>
								</div>
								<label class="Jia-search-con">
									<input type="text" class="Jia-searchInput" autoComplete="off" />
									<input type="submit" value="提交" class="Jia-searchBtn" />
		                            <ul class="Jia-search-refer">
		                            </ul>
								</label>
							</form>
						</div>
			        </div>
		    	</div>
		    </div>
		)
	}
	
}
function mapStateToProps(state) {
    return {
        city:state.city,
        zxNav:state.zxNav,
        hoverIndex:state.hoverReducer,
        searchHoverReducer:state.searchHoverReducer
    }
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({
    	mouseOver: Hover.over,
    	mouseLeave:Hover.leave,
    	searchItemEnter:ItemHover.over,
    	searchItemLeave:ItemHover.out
    }, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(Nav)