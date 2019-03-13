import React from 'react';
import InputRange from 'react-input-range';
import styled from 'styled-components';
import {textForLabels} from "./textForRange";


export class ExampleApp extends React.Component {

    static params = ['cost', 'time', 'scope'];

    constructor(props) {
        super(props);

        this.state = {
            commonPoints: ((this.props.max) * ExampleApp.params.length)/2,
            cost: this.props.max/2,
            time: this.props.max/2,
            scope: this.props.max/2,
            dependentComponent: null,
        };

        this.rangeChange = this.rangeChange.bind(this);

        ExampleApp.textForRangePoint = ExampleApp.textForRangePoint.bind(this);

    }

    static textForRangePoint(value, name) {
        const currentTexts = textForLabels[name];
        return currentTexts[value - 1] ? currentTexts[value - 1] : 'add text!!!';
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
        const anotherNextDC = params.filter(item => item !== randomNextDC)[0];

        this.setState((prevState) => {

            const nextState = {};

            if(Math.abs(prevState[currentRangeName] - value) !== 1) {

                nextState.time = this.props.max/2;
                nextState.scope = this.props.max/2;
                nextState.cost = this.props.max/2;
                nextState.dependentComponent = null;

                console.error(`нарушен шаг ${prevState[currentRangeName] - value} хз почему`);

                return nextState;
            }


            const mathAction = prevState[currentRangeName] > value ? 'minus' : 'plus';

            nextState[currentRangeName] = value;

            if(mathAction === 'minus') {

                const currentDC = this.state[randomNextDC] < this.props.max ?
                    randomNextDC : anotherNextDC;

                const restParam = params.filter(item => item !== currentRangeName && item !== currentDC)[0];
                nextState[restParam] = this.state[restParam];

                nextState.dependentComponent = currentDC;

                nextState[currentDC] = this.state.commonPoints - value - prevState[restParam];
            }

            if (mathAction === 'plus') {

                const currentDC = this.state[randomNextDC] === 0 ?
                    anotherNextDC : randomNextDC;

                const restParam = params.filter(item => item !== currentRangeName && item !== currentDC)[0];
                nextState[restParam] = this.state[restParam];

                nextState.dependentComponent = currentDC;

                nextState[currentDC] = this.state.commonPoints - value - this.state[restParam];
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
                                <span>{ExampleApp.textForRangePoint(this.state.scope, 'scope')}</span>
                            </SectionTitle>
                            <InputRange
                                step={1}
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
                                <span>{ExampleApp.textForRangePoint(this.state.cost, 'cost')}</span>
                            </SectionTitle>
                            <InputRange
                                step={1}
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
                                <span>{ExampleApp.textForRangePoint(this.state.time, 'time')}</span>
                            </SectionTitle>
                            <InputRange
                                step={1}
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


