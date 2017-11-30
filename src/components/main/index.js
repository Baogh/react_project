import React from 'react'
import './main.css'
import axios from 'axios'
import Swiper from '../swiper/Swiper'
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            choose_data: [],
            choose_data_mes: [],
            mes: [],
            list: [],
            show_data: [],
            show_data_mes: [],
        }
    }
    componentDidMount() {
        var that = this;
        axios.get('/api/v3/home?page=1')
            .then((res) => {
                //console.log(res)
                that.setState({
                    choose_data: res.data.datas.items[2],
                    choose_data_mes: res.data.datas.items[2].items,
                    mes: res.data.datas.items[1],
                    list: res.data.datas.items[1].items,
                    show_data: res.data.datas.items[3],
                    show_data_mes: res.data.datas.items[3].items,
                })
            })

    }
    render() {
        //console.log(this.state.mes)
        var list = this.state.mes;
        //console.log(list.items)
        //console.log(this.state.show_data)
        var chooseData = this.state.choose_data
        var showData = this.state.show_data


        var tuijian = this.state.list.map((item, index) => {
            return (
                <div className='main_img' key={item.id}>
                        <img src={item.pic_url} alt={item.title} />
                        <p className='p1'>{item.title}</p>
                        <p className='p2'>{item.subtitle}</p>
                    </div>
            )

        });

        var jingxuan = this.state.choose_data_mes.map((item, index) => {
            return (
                <div className='main_img' key={item.id}>
                        <img src={item.pic_url} alt={item.title} />
                        <p className='p1'>{item.title}</p>
                        <p className='p2'>{item.subtitle}</p>
                    </div>
            )

        });
        var show = this.state.show_data_mes.map((item, index) => {
            return (
                <div className='main_img' key={item.id}>
                        <img src={item.pic_url} alt={item.title} />
                        <p className='p1'>{item.title}</p>
                        <p className='p2'>{item.subtitle}</p>
                    </div>
            )

        });

        return (
            <div className='main'>
            <Swiper></Swiper>
                <p className='p_title'><span>{list.title}</span></p>
                
                <div className='main_tuijian'>
                 {tuijian}
                </div>
                <p className='p_title'><span>{chooseData.title}</span></p>
                
                <div className='main_choose'>
                 {jingxuan}
                </div>
                <p className='p_title'><span>{showData.title}</span></p>
                
                <div className='main_choose'>
                 {show}
                </div>
            </div>
        )
    }
}

export default Main