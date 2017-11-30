import React from 'react'
import './main_lazy.css'
import axios from 'axios'
import { connect } from 'react-redux'


class AppUI extends React.Component {

    componentDidMount() {
        if (this.props.datalist.length == 0) {
            this.props.mapDispatchToProps();

        }

    }
    render() {
        // console.log(this.props.list.title)
        // var props = this.props
        // var arr = this.props.list ? this.props.list
        //     : null;
        // var title1 = props.list.length != 0 ? props.list[0] : null
        // var jingxuan = this.props.datalist.length != 0 ? this.props.datalist.map((item, index) => {
        //     return (
        //         <div className='main_img' key={index}>
        //                 <img src={item.pic_url} alt={item.title} />
        //                 <p className='p1'>{item.title}</p>
        //                 <p className='p2'>{item.subtitle}</p>
        //             </div>
        //     )

        // }) : null

        var arr = this.props.datalist.length ? this.props.datalist[0].items[0].items : []

        var arr1 = this.props.datalist.length ? this.props.datalist[0].items[1].items : []

        var arr2 = this.props.datalist.length ? this.props.datalist[0].items[2].items : []
        var arr3 = this.props.datalist.length ? this.props.datalist[0].items[3].items : []

        return (
            <div className='main_lazy'>    
                <p className='p_title'><span></span></p>
                <div className='main_tuijian'>
                   {
            arr.map((item, index) => {
                return (
                    <div className='main_img' key={index}>
                        <img src={item.pic_url} alt={item.title} />
                        <p className='p1'>{item.title}</p>
                        <p className='p2'>{item.subtitle}</p>
                    </div>
                )

            })
            }
                </div>
           
           <p className='p_title'><span></span></p>
                <div className='main_tuijian'>
                   {
            arr1.map((item, index) => {
                return (
                    <div className='main_img' key={index}>
                        <img src={item.pic_url} alt={item.title} />
                        <p className='p1'>{item.title}</p>
                        <p className='p2'>{item.subtitle}</p>
                    </div>
                )

            })
            }
                </div>
                <p className='p_title'><span></span></p>
                <div className='main_tuijian'>
                   {
            arr2.map((item, index) => {
                return (
                    <div className='main_img' key={index}>
                        <img src={item.pic_url} alt={item.title} />
                        <p className='p1'>{item.title}</p>
                        <p className='p2'>{item.subtitle}</p>
                    </div>
                )

            })
            }
                </div>
                <p className='p_title'><span></span></p>
                <div className='main_tuijian'>
                   {
            arr3.map((item, index) => {
                return (
                    <div className='main_img' key={index}>
                        <img src={item.pic_url} alt={item.title} />
                        <p className='p1'>{item.title}</p>
                        <p className='p2'>{item.subtitle}</p>
                    </div>
                )

            })
            }
                </div>
            </div>
        )
    }
}
// const AppUI =(props)=>(
//      <p className='p_title'><span>{list.title}</span></p>

//                 <div className='main_tuijian'>
//                  {tuijian}
//                 </div>
//  )

const mapStateToProps = (state) => {
    console.log(state.list)
    return {
        datalist: state.list
    }
}
// const mapDispatchToProps = () => {
//     return (dispatch) => {
//         axios.get('/api/v3/home?page=2')
//             .then((res) => {
//                 //console.log(res)
//                 dispatch({
//                     type: 'RES_DATA',
//                     payload: res.data.datas.items
//                 })
//             })

//     }
// }

const Main_lazy = connect(mapStateToProps, {
    mapDispatchToProps: () => {
        return (dispatch) => {
            axios.get('/api/v3/home?page=2')
                .then((res) => {
                    //console.log(res)
                    dispatch({
                        type: 'RES_DATA',
                        payload: res.data.datas
                    })
                })

        }
    }
}
)(AppUI)


export default Main_lazy