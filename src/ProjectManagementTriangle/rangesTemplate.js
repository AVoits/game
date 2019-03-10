import React from 'react';
import InputRange from 'react-input-range';
import styled from 'styled-components';
import {textForLabels} from "./textForRange";


export class ExampleApp extends React.Component {

    static params = ['cost', 'time', 'scope'];

    constructor(props) {
        super(props);

        this.state = {
            cost: 5,
            time: 5,
            scope: 5,
            dependentComponent: null,
        };

        this.rangeChange = this.rangeChange.bind(this);

        ExampleApp.labelText = ExampleApp.labelText.bind(this);

    }

    static labelText(value, name) {
        const currentTexts = textForLabels[name];
        return currentTexts[value - 1];
    }


    static getRandom() {
       return ExampleApp.getRandomInt(0, 2);
    }

    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    getComponentsExceptCurrent(currentRange) {
        return ExampleApp.params.filter(item => item !== currentRange);
    }



    rangeChange(value, currentRangeName) {

        const params = this.getComponentsExceptCurrent(currentRangeName);
        const randomNextDC = params[ExampleApp.getRandom()];


        this.setState((prevState, props) => {

            const mathAction = prevState[currentRangeName] > value ? 'plus' : 'minus';

            const nextState = {};

            if(mathAction === 'plus') {

                const checkedDC = this.state[randomNextDC] !== 10 ?
                    randomNextDC :
                    params.filter(item => item !== randomNextDC)[0];

                nextState.dependentComponent = checkedDC;

                nextState[currentRangeName] = value;

                nextState[checkedDC] = this.state[checkedDC] + 1;

            }

            if (mathAction === 'minus') {

                const checkedDC = this.state[randomNextDC] > 0 ?
                    randomNextDC :
                    params.filter(item => item !== randomNextDC)[0];

                nextState.dependentComponent = checkedDC;

                nextState[currentRangeName] = value;

                nextState[checkedDC] = this.state[checkedDC] - 1;

            }
            return nextState;
        })
    }


    render() {
        return (
            <WrapperCommon>
                <TitleBlock>
                    <Title>Настрой бухгалтера</Title>
                    <Step>5/10</Step>
                </TitleBlock>
                <RangeBlock className={'project-management-triangle'}>
                    <Form className="form">
                        <section className={'scope'}>
                            <SectionTitle>
                                <span>Качество</span>
                                <span>{ExampleApp.labelText(this.state.scope, 'scope')}</span>
                            </SectionTitle>
                            <InputRange
                                formatLabel={() => ''}
                                name={'scope'}
                                maxValue={this.props.max}
                                minValue={this.props.min}
                                value={this.state.scope}
                                onChange={value => this.rangeChange(value, 'scope')}/>
                        </section>
                        <section className={'cost'}>
                            <SectionTitle>
                                <span>Стоимость</span>
                                <span>{ExampleApp.labelText(this.state.cost, 'cost')}</span>
                            </SectionTitle>
                            <InputRange
                                formatLabel={() => ''}
                                name={'cost'}
                                maxValue={this.props.max}
                                minValue={this.props.min}
                                value={this.state.cost}
                                onChange={value => this.rangeChange(value, 'cost')}/>

                        </section>
                        <section className={'time'}>
                            <SectionTitle>
                                <span>Скорость</span>
                                <span>{ExampleApp.labelText(this.state.time, 'time')}</span>
                            </SectionTitle>
                            <InputRange
                                formatLabel={() => ''}
                                name={'time'}
                                maxValue={this.props.max}
                                minValue={this.props.min}
                                value={this.state.time}
                                onChange={value => this.rangeChange(value, 'time')}/>
                        </section>
                    </Form>
                </RangeBlock>
            </WrapperCommon>
        );
    }

}


const WrapperCommon = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Raleway', sans-serif;
`;


const TitleBlock = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #4f4f4f;
  margin: 24px 16px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
    width: 30%;
`;

const Step = styled.div`
    
`;

const RangeBlock = styled.div`
  margin: 16px;
  border-radius: 10px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
`;


const Form = styled.form`
    width: 80%;
    margin: 0 auto;
`;


const SectionTitle = styled.span`
    color: #4f4f4f;
    display: flex;
    justify-content: space-between;
    
    span:first-of-type {
        opacity: 0.5;
    }
`;


