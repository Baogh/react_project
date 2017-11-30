import React from 'react'
import './Swiper.css'
import './antd.css'
// import { BrowserRouter as Router, Redirect, Route, Link, NavLink } from 'react-router-dom'
import { Carousel } from 'antd';
import axios from 'axios';

class Swiper extends React.Component {
    constructor() {
        super();
        this.state = {
            imgs: []
        }
    }
    componentDidMount() {
        var that = this;
        axios.get("/api/v3/home?page=1")
            .then(function(res) {
                console.log(res);
                that.setState({
                    imgs: res.data.datas.items[0].items
                })
            })
    }

    render() {
        //console.log(this.state)
        var list = this.state.imgs.map((item, index) => {
            return (
                <div key={item.id}>
                <img src={item.pic_url} />
            </div>
            )
        });
        return (
            <div>
                <Carousel autoplay>
                    {list}
                </Carousel>
            </div>
        )
    }
}

export default Swiper