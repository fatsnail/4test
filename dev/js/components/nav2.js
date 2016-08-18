import React,{Component} from 'react';
import { connect } from 'react-redux';
import GetNav from '../actions/zxNav';
import {bindActionCreators} from 'redux';
class Nav2 extends Component{
	render(){
		return (
			<div>
    			<div class="icon-layer">
    				<span class="Jia-nav-icon2"></span>
    			</div>
    			<div class="ln-layer">
    				<a id="jia_nav_zhuangxiu" href="http://zhuangxiu.jia.com/" data-tjjj="2014.nav.zzx" class="fst-ln">找装修</a>
    				<i></i>
    				<ul class="snd-ul" dangerouslySetInnerHTML={{__html:this.props.zxNav}}>
    						
    				</ul>
    			</div>
    		</div>
    		
		)
	}
    componentDidMount(){
        this.props.getZxNav(this.props.city);
    }
};
function mapStateToProps(state)
{
    return {
        city:state.city,
        zxNav:state.zxNav
    }
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({getZxNav:GetNav}, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(Nav2);