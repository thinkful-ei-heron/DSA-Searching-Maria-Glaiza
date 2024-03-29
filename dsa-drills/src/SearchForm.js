import React, { Component } from 'react'
import data from './data';
import './SearchForm.css';

class SearchForm extends Component {
    state = {
        data: data,
        input: null,
        result: null,
        sortedData: null,
        counter: null,
        notFound: false
    }

    componentDidMount() {
        const sortedData = data.sort((a,b) => (a>b) ? 1 : -1);
        this.setState({ sortedData })
    }

    linearSearch = (array, num) => {
        // console.log(array)
        num = Number(num);
        let i=0;
        while (array[i] !== num && i<array.length) {
            i++
        }
            if(array[i] === num) {
                this.setState({ counter: i, notFound: false})
            } else {
                this.setState({ counter: null, notFound: true})
            }
    }

    binarySearch = (array, num, start, end, cnt=0) => {
        // console.log(array)
        num = Number(num);

        start = start === undefined ? 0 : start;
        end = end === undefined ? array.length-1: end;


        if(start > end) {
            // console.log('start > end count:' + cnt)
            this.setState({counter: null, notFound: true});
            return -1;
        }

        const index = Math.floor((start + end) / 2);
        const item = array[index];

        // console.log('index :' + index)
        // console.log('mid :' + (item) )
        // console.log('search num :' + (num))
        // console.log('start: '+  start, 'end: ' +end)

        if(start === end && item !== num) {
            // console.log('start===end count :' + cnt);
            return this.setState({ counter: null, notFound: true })
        }
 
        if(item === num) {
            // console.log('count:' + cnt)
            this.setState({ counter: cnt, notFound: false})
          return index;
        } else if (item < num) {
            return this.binarySearch(array, num, index + 1, end, cnt+1);
        } else if (item > num) {
            return this.binarySearch(array, num, start, index-1, cnt+1);
        }

    }

    handleInputChange = ev => {
        this.setState( { input: ev.target.value})
    }

    render() {

        return(
            <div className='SearchForm'>
                <form>
                    <label forhtml='input'>Enter a number: </label>
                    <input onChange = { ev => this.handleInputChange(ev)} type='text' name='input' id='input' required/>
                    <div className='btn'>
                    <button type='button' onClick={() => this.linearSearch(this.state.data, this.state.input)}>Linear Search</button>
                    <button type='button' onClick={() => this.binarySearch(this.state.sortedData, this.state.input)}>Binary Search</button>
                    </div>
                </form>  
                <div className = 'result'>
                    {this.state.counter ? `The number was found in ${this.state.counter} searches` : ''}
                    {this.state.notFound ? `The number was not found` : ''}
                </div>
            </div>
            
        );
    }
}

export default SearchForm;


