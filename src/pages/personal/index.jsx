import React from 'react';

import axios from '../../utils/request'

class Personal extends React.Component {
    async componentDidMount() {
        const { data } = await axios.post('/api/personal');
        console.log( data );
    }

    render() {
        return (
            <div>
                <h2>personal</h2>
            </div>
        )
    }
}

export default Personal;