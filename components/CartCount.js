import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const Dot = styled.div`
    background: var(--red);
    color: white;
    border-radius: 50%;
    padding: 0.5rem;
    line-height: 2rem;
    min-width: 3rem;
    margin-left: 1rem;
    font-feature-settings: 'tnum';
    font-variant-numberic: tabular-nums;
`

const AnimatedStyles = styled.span`
    position: relative;

    .count {
        display: block;
        position: relative;
        transition: transform 0.4s;
        backface-visibility: hidden;
    }

    .count-enter {
        transform: scale(4) rotateX(180deg);
    }

    .count-enter-active {
        transform: rotateX(0);
    }

    .count-exit {
        top: 0;
        position: absolute;
        transform: rotateX(0);
    }

    .count-exit-active {
        transform: scale(4) rotateX(180deg);
    }
`

//Componet display the number of items in the cart
//Accepts count variable as argument from the Nav
export default function CartCount({ count }) {
    return (
        <AnimatedStyles>
            {/* React animation library to animate the add to cart feature */}
            <TransitionGroup>
                <CSSTransition unmountOnExt className="count" classNames="count" key={count} timeout={{ enter: 400, exit: 400 }}>
                    <Dot>{count}</Dot>
                </CSSTransition>
            </TransitionGroup>
        </AnimatedStyles>
    )
}