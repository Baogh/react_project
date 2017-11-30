import React from 'react';
import './ranking.css';
import { connect } from 'react-redux'
import Header from '../header'
import axios from 'axios'

class AppUI extends React.Component {
    constructor() {
        super();
        this.state = {
            datalist: []
        }
    }
    componentDidMount() {
        if (this.props.datalist.length == 0) {
            this.props.mapDispatchToProps();

        }
    }
    render() {
        var arr_map = this.props.datalist.length ? this.props.datalist[0].items : []
        console.log(arr_map)
        return (
            <div>
        		<Header></Header>
        		<main>
        		{
            arr_map.map((item, index) => {
                return (
                    <div className='ranking_main' key={item.mid}>
        				<img src={item.logo} alt={item.name} />
        				<p className='p1'>{item.name}</p>
                        <p className='p2'>{item.author}</p>

        			</div>
                )
            })
            }
        			
        		</main>
        	</div>

        )

    }
}
const mapStateToProps = (state) => {
    console.log(state.rankingList)
    return {
        datalist: state.rankingList
    }
}

const Ranking = connect(mapStateToProps, {
    mapDispatchToProps: () => {
        return (dispatch) => {
            axios.get('/get_data')
                .then((res) => {
                    //console.log(res)
                    dispatch({
                        type: 'RES_RANKINGDATA',
                        payload: res.data.datas
                    })
                })

        }
    }
}
)(AppUI)

export default Ranking