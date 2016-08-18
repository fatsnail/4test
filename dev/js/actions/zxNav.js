var zx_nav={
    city:'shanghai',
    db:[],
    other:'request_url='+location.pathname,
    domain:'www.jia.com',
    handle:function(){
        try{
            this.city=zx_current_areaflag;
            if(zx_current_areaflag!=$.cookie('jia_city_id'))
            {
                $.ajax({
                    url:'http://www.jia.com/citylist/search.php',
                    dataType:'jsonp',
                    data:{search_name:zx_current_areaflag},
                    success:function(data){
                        $('#J_region').html(data[0].city_name);
                    }
                });
            }
        }catch(e)
        {
            this.city=$.cookie('jia_city_id');
            this.city=!this.city||this.city=='other'?'shanghai':this.city;
        }
        var city=this.city;
        var that=this;
        var domain=this.domain;
        $.ajax({
            url:'http://'+domain+'/zx/'+city+'/nav_config/?'+that.other,
            type:'get',
            dataType:'jsonp',
            success:function(data){
                that.deal(data);
            },
            error:function(){
                that.city='shanghai'
                $.ajax({
                    url:'http://'+domain+'/zx/shanghai/nav_config/?'+that.other,
                    dataType:'jsonp',
                    type:'get',
                    success:function(data){
                        that.deal(data);
                    }
                });
            }
        })
    },
    deal:function(data){
        var that=this;
        var city=this.city;
        var domain=this.domain;
        //data=eval('('+data+')');
        for(var i in data)
        {
            var json={};
            that.check_exist(json,data[i]);
            //alert(JSON.stringify(json))
            for(var j in data[i])
            {
                if(j=='child')
                {
                    json.child=[];
                    for(var k in data[i].child)
                    {
                        var b=true;
                        for(var r in data[i].child[k])
                        {
                            if(r=='areaflag')
                            {
                                b=false;
                                if(data[i].child[k][r].length)
                                {
                                    if($.inArray(city,data[i].child[k][r])>-1)
                                    {
                                        var opt={};
                                        opt.text=data[i].child[k].text;
                                        opt.url=data[i].child[k].url;
                                        json.child.push(opt)
                                    }
                                }
                                else
                                {
                                    for(var u in data[i].child[k][r])
                                    {
                                        if(data[i].child[k][r][u]==city)
                                        {
                                            var opt={};
                                            opt.text=data[i].child[k].text;
                                            opt.url=data[i].child[k].url;
                                            json.child.push(opt)
                                        }
                                    }
                                }
                            }
                        }
                        if(b)
                        {
                            var opt={};
                            opt.text=data[i].child[k].text;
                            opt.url=data[i].child[k].url;
                            json.child.push(opt)
                        }
                        
                    }
                    for(var y=0;y<json.child.length;y++)
                    {
                        json.child[y].url='http://'+domain+'/zx/'+city+'/'+json.child[y].url;
                    }
                }
            }
            that.db.push(json);
        }
        var filter=[];
        for(var i=0;i<that.db.length;i++)
        {
            if(that.db[i].text!='装修首页')
            {
                filter.push(that.db[i]);
            }
        }
        that.db=filter;
        that.db=that.db.sort(function(n1,n2){
            return n1.text.length-n2.text.length
        })
        var str='';
        for(var i=0;i<that.db.length;i++)
        {
            str+=that.create(that.db[i]);
            
        }
        $('#nav_zzx .snd-ul').html(str);
        if($.inArray(city,oJia.has_daikuan)>-1)
        {
            $('<li id="jia_nav_daikuan"><a href="http://daikuan.jia.com/shanghai/" tjjj="2014.nav.daikuan">装修贷款</a></li>').appendTo($('#nav_zzx .snd-ul'));
        };
        var num=null;
        for(var i=0;i<that.db.length;i++)
        {
            var json=that.db[i];
            for(var j in json)
            {
                if(j=='child')
                {
                    for(var h=0;h<json.child.length;h++)
                    {
                        var obJ=json.child[h];
                        if(obJ.url==document.URL)
                        {
                            num=i;
                        }
                    }
                }
            }
        }
        
        if(num||num==0)
        {
            for(var i in that.db[num])
            {
                if(i=='child')
                {
                    var str='';
                    for(var m=0;m<that.db[num].child.length;m++)
                    {
                        var obj=that.db[num].child[m];
                        var _baozhang=obj.text=="齐家保"?'<img src="http://fastued3.jia.com/image/zhuangxiu/new_finish_v2/nav_qijiabao.png" style="vertical-align: middle;">':obj.text;
                        str+='<li><a href="'+obj.url+'">'+_baozhang+'</a></li>'
                    }
                    that.append_nav(str);
                }
            }
        }
    },
    check_exist:function(city,OBJ,obj){
        for(var n in obj)
        {
            if(n=='areaflag')
            {
                if(obj[n].length)
                {
                    if($.inArray(city,obj[n])>-1)
                    {
                        OBJ.text=obj.text;
                        OBJ.url=obj.url;
                    }
                }
                else
                {
                    for(var m in obj[n])
                    {
                        if(obj[n][m]==city)
                        {
                            OBJ.text=obj.text;
                            OBJ.url=obj.url;
                        }
                    }
                }
            }
        }
    },
    append_nav:function(li_str){
        //Jia_zx_nav_active
        var str=''
        +'<div class="Jia_zx_sub_nav">'
        +'    <div class="Jia_zx_sub_nav_wrap">'
        +'        <ul class="clearfix">'
        +li_str
        +'        </ul>'
        +'    </div>'
        +'</div>';
        $('#Jia-header-2016').after(str);
        $('.Jia_zx_sub_nav_wrap li').each(function(index,ele){
            if(document.URL==$(ele).find('a').attr('href'))
            {
                $(ele).addClass('Jia_zx_nav_active');
            }
        });
    },
    create:function(obj){
        var domain=this.domain;
        
        var str=''
        +'<li>'
        +'    <a href="http://'+domain+'/zx/'+this.city+'/'+obj.url+'">'+obj.text+'</a>'
        +'</li>';
        return str;
    }
};
export default function(city,dispatch){
	return (dispatch)=>{
		$.ajax({
			url:'http://www.jia.com/zx/shanghai/nav_config/?request_url='+location.pathname,
			dataType:'jsonp',
			success:function(data)
			{

				for(var i in data)
		        {
		            var json={};
		            zx_nav.check_exist(city,json,data[i]);
		            //alert(JSON.stringify(json))
		            for(var j in data[i])
		            {
		                if(j=='child')
		                {
		                    json.child=[];
		                    for(var k in data[i].child)
		                    {
		                        var b=true;
		                        for(var r in data[i].child[k])
		                        {
		                            if(r=='areaflag')
		                            {
		                                b=false;
		                                if(data[i].child[k][r].length)
		                                {
		                                    if($.inArray(city,data[i].child[k][r])>-1)
		                                    {
		                                        var opt={};
		                                        opt.text=data[i].child[k].text;
		                                        opt.url=data[i].child[k].url;
		                                        json.child.push(opt)
		                                    }
		                                }
		                                else
		                                {
		                                    for(var u in data[i].child[k][r])
		                                    {
		                                        if(data[i].child[k][r][u]==city)
		                                        {
		                                            var opt={};
		                                            opt.text=data[i].child[k].text;
		                                            opt.url=data[i].child[k].url;
		                                            json.child.push(opt)
		                                        }
		                                    }
		                                }
		                            }
		                        }
		                        if(b)
		                        {
		                            var opt={};
		                            opt.text=data[i].child[k].text;
		                            opt.url=data[i].child[k].url;
		                            json.child.push(opt)
		                        }
		                        
		                    }
		                    for(var y=0;y<json.child.length;y++)
		                    {
		                        json.child[y].url='http://www.jia.com/zx/'+city+'/'+json.child[y].url;
		                    }
		                }
		            }
		            zx_nav.db.push(json);
		        }
		        var filter=[];
		        for(var i=0;i<zx_nav.db.length;i++)
		        {
		            if(zx_nav.db[i].text!='装修首页')
		            {
		                filter.push(zx_nav.db[i]);
		            }
		        }
		        zx_nav.db=filter;
		        zx_nav.db=zx_nav.db.sort(function(n1,n2){
		            return n1.text.length-n2.text.length
		        })
		        var str='';
		        for(var i=0;i<zx_nav.db.length;i++)
		        {
		            str+=zx_nav.create(zx_nav.db[i]);
		            
		        }
		        dispatch({
		        	type:'ZX_NAV',
		        	payload:str
		        })
			}
		});
	}
}