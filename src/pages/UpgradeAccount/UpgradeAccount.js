import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { fetchPlansStart } from '../../redux/Plans/plans.actions'

//Styled Components
import { 
    PlansContainer,
    Cards,
    Card,
    CardTitle,
    CardPrice,
    CardPlan,
    CardPlanItem,
    CardButton,
    CartPriceWrapper,
    MainTitle,
} from './UpgradeAccountComponents'

//Components
import Navbar from '../../components/Navbar'
import DashboardNav from '../../components/DashboardNav/DashboardNav'

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    plans: state.plansData.plans,
})

const UpgradeAccount = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { currentUser, plans } = useSelector(mapState)

    useEffect(() => {
        dispatch(
            fetchPlansStart()
        )
    })

    const handleSelectPlan = (planID) => {
        history.push(`/subscribe-plan/${planID}`)
    }

    return (
        <>
            <Navbar />
            <DashboardNav />
            <PlansContainer>
                <MainTitle>
                    Kursy Online - Miejsce na twoje kursy
                </MainTitle>
                <Cards>
                    {  plans && 
                        plans.map((data, planIndex) => {
                            return (<Card key={planIndex} active={data.documentID === currentUser.planId}>
                                <CardTitle>{data.planName}</CardTitle>
                                <CartPriceWrapper>
                                    <CardPrice>
                                        {data.planPrice === 0 ? "0.00" : data.planPrice}
                                        <span className="price-symbol">zł</span>
                                        <span className="price-title"> /month</span>
                                    </CardPrice>
                                </CartPriceWrapper>
                                <CardButton onClick={() => handleSelectPlan(data.documentID)} active={data.documentID === currentUser.planId}>
                                    { data.documentID === currentUser.planId ?
                                        "Current Plan" : "Choose Plan"
                                    }
                                </CardButton>
                                <CardPlan>
                                    {
                                        data.planDetails.map((detail, detailIndex) => {
                                            return (
                                                <CardPlanItem key={detailIndex}> 
                                                    <span dangerouslySetInnerHTML={{__html: detail}} />
                                                </CardPlanItem>
                                            )
                                        })
                                    }
                                </CardPlan>
                            </Card>)
                        })
                    }  
                </Cards>
            </PlansContainer>
        </>
    )
}

export default UpgradeAccount
