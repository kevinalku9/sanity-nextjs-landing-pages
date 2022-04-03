import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
// import DownloadTableExcel from 'react-export-table-to-excel'
import jason from '../../data/dataJson.json'

const {useEffect, useRef, useState} = React

export default function SelectBox(props) {
  console.log('selectbox', props)
  const [data, setData] = useState([])
  const count = useRef(null)
  const choiceElement = useRef(null)
  const choiceQuantity = useRef(null)

  const {heading} = props
  useEffect(() => {
    console.log('test', jason.data)
    setData(jason.data)
  }, [])

  useEffect(() => {
    const click = () => {
      console.log('test 333')
    }
    console.log('test 2', count)
    document.addEventListener('click', click)

    return () => {
      document.removeEventListener('click', click)
      choiceElement.current.addEventListener('change', () => {
        // e.current.value;
        if (choiceElement.current.value === 'single') {
          choiceQuantity.current.classList.add('disabled')
          console.log('disabled')
        } else {
          choiceQuantity.current.classList.remove('disabled')
          console.log('enabled')
        }
      })
    }
  })

  const filterElements = () => {
    let myStaticData = {
      ios: 'Off',
      urlSettings: 'On',
      campaignID: '',
      campaignStatus: 'On',
      campaignName: '',
      adsObjective: 'Traffic',
      budgetType: 'Daily',
      budgetAmount: '50',
      budgetOptimization: 'Off',
      campaignBidStrategy: '',
      campaignDelievery: '',
      adGroupID: '',
      adGroupStatus: 'Off',
      adGroupName: 'Ad Group Test 2',
      placementTypes: 'Select',
      placements: 'TikTok',
      blockList: '',
      promotionType: 'Website',
      webUrl:
        'https://trurls.com/?flux_fts=tiopqttqapxtzoalaiaetipazxqtctppcczzcap40b0d&flux_fn=1486211296321247779&ttclid=__CLICKID__&access=c35bd9871c602477502deed07cae90986c3ff5bf&pixid=C7RKSOU0MJON0LQMORQ0&evname=SubmitForm',
      fallbackType: '',
      fallbackWebsite: '',
      tikTokPixelID: '',
      pixelEvent: '',
      appID: '',
      displayName: '',
      profileImage: '',
      userComments: 'On',
      videoDownload: 'Off',
      automatedCreativeOpt: 'Off',
      targetingMode: 'Custom',
      retargetUsers: '',
      audienceType: '',
      includeAudienceBehavior: '',
      excludeAudienceBehavior: '',
      includeAudienceID: '',
      excludeAudienceID: '',
      location: 'L6252001',
      gender: 'Male',
      age: '55+',
      languages: 'All',
      interestCategories: 'C14,C15,C23',
      behaviorCategories: 'B14',
      videoRelated: 'Liked',
      timeBehavior: '7',
      creatorGategories: 'B6,B7',
      creatorRelatedActions: 'Viewed Profile',
      operatingSystem: 'iOS',
      connectionType: 'WIFI,4G',
      carriers: 'All',
      devicePrice: 'All',
      osVersions: '12',
      targetingExpansion: 'Off',
      targetingSettings: '',
      adGroupBudgetType: 'Daily',
      adGroupBudgetAmount: '20',
      startTime: '',
      endTime: '',
      dayparting: 'All Day',
      optimizationGoal: 'Click',
      appEvent: '',
      secondatyGoal: '',
      billingMethod: 'CPC',
      frequencyCap: '',
      bidStrategy: 'Cost Cap',
      optPreference: '',
      bid: '0.10',
      bidForOCPC: '',
      bidForSecondary: '',
      delieveryType: 'Accelerated',
      impressionTrackingURL: '',
      clickTrackingURL: '',
      adID: '',
      adStatus: 'Off',
      adName: '',
      useTikTokAccount: 'Off',
      identityType: 'Custom Identity',
      identityID: 'id:7076498150044106754',
      imageName: '',
      videoName: '',
      postID: '',
      instantFormID: '',
      text: 'For testing Seniors',
      callToAction: 'Learn More',
      playableID: '',
      autoAdImage: '',
      autoAdVideo: '',
      autoAdText: '',
      autoAdCallToAction: '',
    }
    let staticData = [...data]
    let quantity = choiceQuantity.current.value

    if (choiceElement.current.value === 'single') {
      // console.log("trueeee valuee", staticData);
      staticData.push(myStaticData)
      setData(staticData)
      fetch('api/modJson', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(myStaticData),
      })
    } else {
      for (let i = 0; i < quantity; i++) {
        staticData.push(myStaticData)
        fetch('api/modJson', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(myStaticData),
        })
      }
      setData(staticData)
    }
  }

  const addData = () => {
    fetch('api/modJson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        ios: count.current.querySelector('#ios')?.value,
        urlSettings: count.current.querySelector('#urlSettings')?.value,
        campaignID: count.current.querySelector('#campaignID')?.value,
        campaignStatus: count.current.querySelector('#campaignStatus')?.value,
        campaignName: count.current.querySelector('#campaignName')?.value,
        adsObjective: count.current.querySelector('#adsObjective')?.value,
        budgetType: count.current.querySelector('#budgetType')?.value,
        budgetAmount: count.current.querySelector('#budgetAmount')?.value,
        budgetOptimization: count.current.querySelector('#budgetOptimization')?.value,
        campaignBidStrategy: count.current.querySelector('#campaignBidStrategy')?.value,
        campaignDelievery: count.current.querySelector('#campaignDelievery')?.value,
        adGroupID: count.current.querySelector('#adGroupID')?.value,
        adGroupStatus: count.current.querySelector('#adGroupStatus')?.value,
        adGroupName: count.current.querySelector('#adGroupName')?.value,
        placementTypes: count.current.querySelector('#placementTypes')?.value,
        placements: count.current.querySelector('#placement')?.value,
        blockList: count.current.querySelector('#blockList')?.value,
        promotionType: count.current.querySelector('#promotionType')?.value,
        webUrl: count.current.querySelector('#webUrl')?.value,
        fallbackType: count.current.querySelector('#fallbackType')?.value,
        fallbackWebsite: count.current.querySelector('#fallbackWebsite')?.value,
        tikTokPixelID: count.current.querySelector('#tikTokPixelID')?.value,
        pixelEvent: count.current.querySelector('#pixelEvent')?.value,
        appID: count.current.querySelector('#appID')?.value,
        displayName: count.current.querySelector('#displayName')?.value,
        profileImage: count.current.querySelector('#profileImage')?.value,
        userComments: count.current.querySelector('#userComments')?.value,
        videoDownload: count.current.querySelector('#videoDownload')?.value,
        automatedCreativeOpt: count.current.querySelector('#automatedCreativeOpt')?.value,
        targetingMode: count.current.querySelector('#targetingMode')?.value,
        retargetUsers: count.current.querySelector('#retargetUsers')?.value,
        audienceType: count.current.querySelector('#audienceType')?.value,
        includeAudienceBehavior: count.current.querySelector('#includeAudienceBehavior')?.value,
        excludeAudienceBehavior: count.current.querySelector('#excludeAudienceBehavior')?.value,
        includeAudienceID: count.current.querySelector('#includeAudienceID')?.value,
        excludeAudienceID: count.current.querySelector('#excludeAudienceID')?.value,
        location: count.current.querySelector('#location')?.value,
        gender: count.current.querySelector('#gender')?.value,
        age: count.current.querySelector('#age')?.value,
        languages: count.current.querySelector('#languages')?.value,
        interestCategories: count.current.querySelector('#interestCategories')?.value,
        behaviorCategories: count.current.querySelector('#behaviorCategories')?.value,
        videoRelated: count.current.querySelector('#videoRelated')?.value,
        timeBehavior: count.current.querySelector('#timeBehavior')?.value,
        creatorGategories: count.current.querySelector('#creatorGategories')?.value,
        creatorRelatedActions: count.current.querySelector('#creatorRelatedActions')?.value,
        operatingSystem: count.current.querySelector('#operatingSystem')?.value,
        connectionType: count.current.querySelector('#connectionType')?.value,
        carriers: count.current.querySelector('#carriers')?.value,
        devicePrice: count.current.querySelector('#devicePrice')?.value,
        osVersions: count.current.querySelector('#osVersions')?.value,
        targetingExpansion: count.current.querySelector('#targetingExpansion')?.value,
        targetingSettings: count.current.querySelector('#targetingSettings')?.value,
        adGroupBudgetType: count.current.querySelector('#adGroupBudgetType')?.value,
        adGroupBudgetAmount: count.current.querySelector('#adGroupBudgetAmount')?.value,
        startTime: count.current.querySelector('#startTime')?.value,
        endTime: count.current.querySelector('#endTime')?.value,
        dayparting: count.current.querySelector('#dayparting')?.value,
        optimizationGoal: count.current.querySelector('#optimizationGoal')?.value,
        appEvent: count.current.querySelector('#appEvent')?.value,
        secondatyGoal: count.current.querySelector('#secondatyGoal')?.value,
        billingMethod: count.current.querySelector('#billingMethod')?.value,
        frequencyCap: count.current.querySelector('#frequencyCap')?.value,
        bidStrategy: count.current.querySelector('#bidStrategy')?.value,
        optPreference: count.current.querySelector('#optPreference')?.value,
        bid: count.current.querySelector('#bid')?.value,
        bidForOCPC: count.current.querySelector('#bidForOCPC')?.value,
        bidForSecondary: count.current.querySelector('#bidForSecondary')?.value,
        delieveryType: count.current.querySelector('#delieveryType')?.value,
        impressionTrackingURL: count.current.querySelector('#impressionTrackingURL')?.value,
        clickTrackingURL: count.current.querySelector('#clickTrackingURL')?.value,
        adID: count.current.querySelector('#adID')?.value,
        adStatus: count.current.querySelector('#adStatus')?.value,
        adName: count.current.querySelector('#adName')?.value,
        useTikTokAccount: count.current.querySelector('#useTikTokAccount')?.value,
        identityType: count.current.querySelector('#identityType')?.value,
        identityID: count.current.querySelector('#identityID')?.value,
        imageName: count.current.querySelector('#imageName')?.value,
        videoName: count.current.querySelector('#videoName')?.value,
        postID: count.current.querySelector('#postID')?.value,
        instantFormID: count.current.querySelector('#instantFormID')?.value,
        text: count.current.querySelector('#text')?.value,
        callToAction: count.current.querySelector('#callToAction')?.value,
        playableID: count.current.querySelector('#playableID')?.value,
        autoAdImage: count.current.querySelector('#autoAdImage')?.value,
        autoAdVideo: count.current.querySelector('#autoAdVideo')?.value,
        autoAdText: count.current.querySelector('#autoAdText')?.value,
        autoAdCallToAction: count.current.querySelector('#autoAdCallToAction')?.value,
      }),
    })
      .then((res) => res.text())
      .then((res) => console.log('res', res))
    let copiedData = [...data]

    copiedData.push({
      ios: count.current.querySelector('#ios')?.value,
      urlSettings: count.current.querySelector('#urlSettings')?.value,
      campaignID: count.current.querySelector('#campaignID')?.value,
      campaignStatus: count.current.querySelector('#campaignStatus')?.value,
      campaignName: count.current.querySelector('#campaignName')?.value,
      adsObjective: count.current.querySelector('#adsObjective')?.value,
      budgetType: count.current.querySelector('#budgetType')?.value,
      budgetAmount: count.current.querySelector('#budgetAmount')?.value,
      budgetOptimization: count.current.querySelector('#budgetOptimization')?.value,
      campaignBidStrategy: count.current.querySelector('#campaignBidStrategy')?.value,
      campaignDelievery: count.current.querySelector('#campaignDelievery')?.value,
      adGroupID: count.current.querySelector('#adGroupID')?.value,
      adGroupStatus: count.current.querySelector('#adGroupStatus')?.value,
      adGroupName: count.current.querySelector('#adGroupName')?.value,
      placementTypes: count.current.querySelector('#placementTypes')?.value,
      placements: count.current.querySelector('#placement')?.value,
      blockList: count.current.querySelector('#blockList')?.value,
      promotionType: count.current.querySelector('#promotionType')?.value,
      webUrl: count.current.querySelector('#webUrl')?.value,
      fallbackType: count.current.querySelector('#fallbackType')?.value,
      fallbackWebsite: count.current.querySelector('#fallbackWebsite')?.value,
      tikTokPixelID: count.current.querySelector('#tikTokPixelID')?.value,
      pixelEvent: count.current.querySelector('#pixelEvent')?.value,
      appID: count.current.querySelector('#appID')?.value,
      displayName: count.current.querySelector('#displayName')?.value,
      profileImage: count.current.querySelector('#profileImage')?.value,
      userComments: count.current.querySelector('#userComments')?.value,
      videoDownload: count.current.querySelector('#videoDownload')?.value,
      automatedCreativeOpt: count.current.querySelector('#automatedCreativeOpt')?.value,
      targetingMode: count.current.querySelector('#targetingMode')?.value,
      retargetUsers: count.current.querySelector('#retargetUsers')?.value,
      audienceType: count.current.querySelector('#audienceType')?.value,
      includeAudienceBehavior: count.current.querySelector('#includeAudienceBehavior')?.value,
      excludeAudienceBehavior: count.current.querySelector('#excludeAudienceBehavior')?.value,
      includeAudienceID: count.current.querySelector('#includeAudienceID')?.value,
      excludeAudienceID: count.current.querySelector('#excludeAudienceID')?.value,
      location: count.current.querySelector('#location')?.value,
      gender: count.current.querySelector('#gender')?.value,
      age: count.current.querySelector('#age')?.value,
      languages: count.current.querySelector('#languages')?.value,
      interestCategories: count.current.querySelector('#interestCategories')?.value,
      behaviorCategories: count.current.querySelector('#behaviorCategories')?.value,
      videoRelated: count.current.querySelector('#videoRelated')?.value,
      timeBehavior: count.current.querySelector('#timeBehavior')?.value,
      creatorGategories: count.current.querySelector('#creatorGategories')?.value,
      creatorRelatedActions: count.current.querySelector('#creatorRelatedActions')?.value,
      operatingSystem: count.current.querySelector('#operatingSystem')?.value,
      connectionType: count.current.querySelector('#connectionType')?.value,
      carriers: count.current.querySelector('#carriers')?.value,
      devicePrice: count.current.querySelector('#devicePrice')?.value,
      osVersions: count.current.querySelector('#osVersions')?.value,
      targetingExpansion: count.current.querySelector('#targetingExpansion')?.value,
      targetingSettings: count.current.querySelector('#targetingSettings')?.value,
      adGroupBudgetType: count.current.querySelector('#adGroupBudgetType')?.value,
      adGroupBudgetAmount: count.current.querySelector('#adGroupBudgetAmount')?.value,
      startTime: count.current.querySelector('#startTime')?.value,
      endTime: count.current.querySelector('#endTime')?.value,
      dayparting: count.current.querySelector('#dayparting')?.value,
      optimizationGoal: count.current.querySelector('#optimizationGoal')?.value,
      appEvent: count.current.querySelector('#appEvent')?.value,
      secondatyGoal: count.current.querySelector('#secondatyGoal')?.value,
      billingMethod: count.current.querySelector('#billingMethod')?.value,
      frequencyCap: count.current.querySelector('#frequencyCap')?.value,
      bidStrategy: count.current.querySelector('#bidStrategy')?.value,
      optPreference: count.current.querySelector('#optPreference')?.value,
      bid: count.current.querySelector('#bid')?.value,
      bidForOCPC: count.current.querySelector('#bidForOCPC')?.value,
      bidForSecondary: count.current.querySelector('#bidForSecondary')?.value,
      delieveryType: count.current.querySelector('#delieveryType')?.value,
      impressionTrackingURL: count.current.querySelector('#impressionTrackingURL')?.value,
      clickTrackingURL: count.current.querySelector('#clickTrackingURL')?.value,
      adID: count.current.querySelector('#adID')?.value,
      adStatus: count.current.querySelector('#adStatus')?.value,
      adName: count.current.querySelector('#adName')?.value,
      useTikTokAccount: count.current.querySelector('#useTikTokAccount')?.value,
      identityType: count.current.querySelector('#identityType')?.value,
      identityID: count.current.querySelector('#identityID')?.value,
      imageName: count.current.querySelector('#imageName')?.value,
      videoName: count.current.querySelector('#videoName')?.value,
      postID: count.current.querySelector('#postID')?.value,
      instantFormID: count.current.querySelector('#instantFormID')?.value,
      text: count.current.querySelector('#text')?.value,
      callToAction: count.current.querySelector('#callToAction')?.value,
      playableID: count.current.querySelector('#playableID')?.value,
      autoAdImage: count.current.querySelector('#autoAdImage')?.value,
      autoAdVideo: count.current.querySelector('#autoAdVideo')?.value,
      autoAdText: count.current.querySelector('#autoAdText')?.value,
      autoAdCallToAction: count.current.querySelector('#autoAdCallToAction')?.value,
    })

    console.log('test 4444', count, count.current.querySelector('#name'))

    setData(copiedData)
  }

  return (
    <div className={`formWrapper`}>
      <select name="choose-elements" id="" ref={choiceElement}>
        <option value="single">Single element</option>
        <option value="multiple">Multiple elements</option>
      </select>
      <select name="choose-number" ref={choiceQuantity} className={'disabled'} id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <button className="filter-elements" onClick={() => filterElements()}>
        Submit Filter
      </button>
      <div className={`form-input`} ref={count}>
        <div className={`inputList`}>
          <input className="textArea" id="ios" type="text" placeholder="ios"></input>
          <input className="textArea" id="urlSettings" type="text" placeholder="urlSettings"></input>
          <input className="textArea" id="campaignID" type="text" placeholder="campaignID"></input>
          <input className="textArea" id="campaignStatus" type="text" placeholder="campaignStatus"></input>
          <input className="textArea" id="campaignName" type="text" placeholder="campaignName"></input>
          <input className="textArea" id="adsObjective" type="text" placeholder="adsObjective"></input>
          <input className="textArea" id="budgetType" type="text" placeholder="budgetType"></input>
          <input className="textArea" id="budgetAmount" type="text" placeholder="budgetAmount"></input>
          <input className="textArea" id="budgetOptimization" type="text" placeholder="budgetOptimization"></input>
          <input className="textArea" id="campaignBidStrategy" type="text" placeholder="campaignBidStrategy"></input>
          <input className="textArea" id="campaignDelievery" type="text" placeholder="campaignDelievery"></input>
          <input className="textArea" id="adGroupID" type="text" placeholder="adGroupID"></input>
          <input className="textArea" id="adGroupStatus" type="text" placeholder="adGroupStatus"></input>
          <input className="textArea" id="adGroupName" type="text" placeholder="adGroupName"></input>
          <input className="textArea" id="placementTypes" type="text" placeholder="placementTypes"></input>
          <input className="textArea" id="placement" type="text" placeholder="placement"></input>
          <input className="textArea" id="blockList" type="text" placeholder="blockList"></input>
          <input className="textArea" id="promotionType" type="text" placeholder="promotionType"></input>
          <input className="textArea" id="webUrl" type="text" placeholder="webUrl"></input>
          <input className="textArea" id="fallbackType" type="text" placeholder="fallbackType"></input>
          <input className="textArea" id="fallbackWebsite" type="text" placeholder="fallbackWebsite"></input>
          <input className="textArea" id="tikTokPixelID" type="text" placeholder="tikTokPixelID"></input>
          <input className="textArea" id="pixelEvent" type="text" placeholder="pixelEvent"></input>
          <input className="textArea" id="appID" type="text" placeholder="appID"></input>
          <input className="textArea" id="displayName" type="text" placeholder="displayName"></input>
          <input className="textArea" id="profileImage" type="text" placeholder="profileImage"></input>
          <input className="textArea" id="userComments" type="text" placeholder="userComments"></input>
          <input className="textArea" id="videoDownload" type="text" placeholder="videoDownload"></input>
          <input className="textArea" id="automatedCreativeOpt" type="text" placeholder="automatedCreativeOpt"></input>
          <input className="textArea" id="targetingMode" type="text" placeholder="targetingMode"></input>
          <input className="textArea" id="retargetUsers" type="text" placeholder="retargetUsers"></input>
          <input className="textArea" id="audienceType" type="text" placeholder="audienceType"></input>
          <input className="textArea" id="includeAudienceBehavior" type="text" placeholder="includeAudienceBehavior"></input>
          <input className="textArea" id="excludeAudienceBehavior" type="text" placeholder="excludeAudienceBehavior"></input>
          <input className="textArea" id="includeAudienceID" type="text" placeholder="includeAudienceID"></input>
          <input className="textArea" id="excludeAudienceID" type="text" placeholder="excludeAudienceID"></input>
          <input className="textArea" id="location" type="text" placeholder="location"></input>
          <input className="textArea" id="gender" type="text" placeholder="gender"></input>
          <input className="textArea" id="age" type="text" placeholder="age"></input>
          <input className="textArea" id="languages" type="text" placeholder="languages"></input>
          <input className="textArea" id="interestCategories" type="text" placeholder="interestCategories"></input>
          <input className="textArea" id="behaviorCategories" type="text" placeholder="behaviorCategories"></input>
          <input className="textArea" id="videoRelated" type="text" placeholder="videoRelated"></input>
          <input className="textArea" id="timeBehavior" type="text" placeholder="timeBehavior"></input>
          <input className="textArea" id="creatorGategories" type="text" placeholder="creatorGategories"></input>
          <input className="textArea" id="creatorRelatedActions" type="text" placeholder="creatorRelatedActions"></input>
          <input className="textArea" id="operatingSystem" type="text" placeholder="operatingSystem"></input>
          <input className="textArea" id="connectionType" type="text" placeholder="connectionType"></input>
          <input className="textArea" id="carriers" type="text" placeholder="carriers"></input>
          <input className="textArea" id="devicePrice" type="text" placeholder="devicePrice"></input>
          <input className="textArea" id="osVersions" type="text" placeholder="osVersions"></input>
          <input className="textArea" id="targetingExpansion" type="text" placeholder="targetingExpansion"></input>
          <input className="textArea" id="targetingSettings" type="text" placeholder="targetingSettings"></input>
          <input className="textArea" id="adGroupBudgetType" type="text" placeholder="adGroupBudgetType"></input>
          <input className="textArea" id="adGroupBudgetAmount" type="text" placeholder="adGroupBudgetAmount"></input>
          <input className="textArea" id="startTime" type="text" placeholder="startTime"></input>
          <input className="textArea" id="endTime" type="text" placeholder="endTime"></input>
          <input className="textArea" id="dayparting" type="text" placeholder="dayparting"></input>
          <input className="textArea" id="optimizationGoal" type="text" placeholder="optimizationGoal"></input>
          <input className="textArea" id="appEvent" type="text" placeholder="appEvent"></input>
          <input className="textArea" id="secondatyGoal" type="text" placeholder="secondatyGoal"></input>
          <input className="textArea" id="billingMethod" type="text" placeholder="billingMethod"></input>
          <input className="textArea" id="frequencyCap" type="text" placeholder="frequencyCap"></input>
          <input className="textArea" id="bidStrategy" type="text" placeholder="bidStrategy"></input>
          <input className="textArea" id="optPreference" type="text" placeholder="optPreference"></input>
          <input className="textArea" id="bid" type="text" placeholder="bid"></input>
          <input className="textArea" id="bidForOCPC" type="text" placeholder="bidForOCPC"></input>
          <input className="textArea" id="bidForSecondary" type="text" placeholder="bidForSecondary"></input>
          <input className="textArea" id="delieveryType" type="text" placeholder="delieveryType"></input>
          <input className="textArea" id="impressionTrackingURL" type="text" placeholder="impressionTrackingURL"></input>
          <input className="textArea" id="clickTrackingURL" type="text" placeholder="clickTrackingURL"></input>
          <input className="textArea" id="adID" type="text" placeholder="adID"></input>
          <input className="textArea" id="adStatus" type="text" placeholder="adStatus"></input>
          <input className="textArea" id="adName" type="text" placeholder="adName"></input>
          <input className="textArea" id="useTikTokAccount" type="text" placeholder="useTikTokAccount"></input>
          <input className="textArea" id="identityType" type="text" placeholder="identityType"></input>
          <input className="textArea" id="identityID" type="text" placeholder="identityID"></input>
          <input className="textArea" id="imageName" type="text" placeholder="imageName"></input>
          <input className="textArea" id="videoName" type="text" placeholder="videoName"></input>
          <input className="textArea" id="postID" type="text" placeholder="postID"></input>
          <input className="textArea" id="instantFormID" type="text" placeholder="instantFormID"></input>
          <input className="textArea" id="text" type="text" placeholder="text"></input>
          <input className="textArea" id="callToAction" type="text" placeholder="callToAction"></input>
          <input className="textArea" id="playableID" type="text" placeholder="playableID"></input>
          <input className="textArea" id="autoAdImage" type="text" placeholder="autoAdImage"></input>
          <input className="textArea" id="autoAdVideo" type="text" placeholder="autoAdVideo"></input>
          <input className="textArea" id="autoAdText" type="text" placeholder="autoAdText"></input>
          <input className="textArea" id="autoAdCallToAction" type="text" placeholder="autoAdCallToAction"></input>
          {/* <select className="textArea" id='age' type="selectbox" placeholder="Age">
            <option> </option>
            <option> 35 </option>
            <option> 40 </option>
            <option> 45 </option>
          </select> */}
        </div>
        <button className="button-submit" type="button" onClick={() => addData()}>
          Submit
        </button>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS"
        />
      </div>
      <table id="table-to-xls">
        <tr>
          <th>iOS 14 Dedicated Campaign</th>
          <th>URL Settings</th>
          <th>Campaign ID</th>
          <th>Campaign Status</th>
          <th>Campaign Name</th>
          <th>Advertising Objective</th>
          <th>Campaign Budget Type</th>
          <th>Campaign Budget Amount</th>
          <th>Campaign Budget Optimization</th>
          <th>Campaign Bid Strategy</th>
          <th>Campaign Delivery Type</th>
          <th>Ad Group ID</th>
          <th>Ad Group Status</th>
          <th>Ad Group Name</th>
          <th>Placement Types</th>
          <th>Placements</th>
          <th>Block List (Pangle)</th>
          <th>Promotion Type</th>
          <th>Web URL</th>
          <th>Fallback Type</th>
          <th>Fallback Website URL</th>
          <th>TikTok Pixel ID</th>
          <th>Pixel Event</th>
          <th>App ID</th>
          <th>Display Name</th>
          <th>Profile Image Name</th>
          <th>User Comment</th>
          <th>Video Download</th>
          <th>Automated Creative Optimization</th>
          <th>Targeting Mode</th>
          <th>Retarget Users Who've Installed Your App</th>
          <th>Audience Type</th>
          <th>Include Audience Behavior</th>
          <th>Exclude Audience Behavior</th>
          <th>Include audience ID</th>
          <th>Exclude audience ID</th>
          <th>Location</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Languages</th>
          <th>Interest Category</th>
          <th>Behavior Category</th>
          <th>Video-related Actions</th>
          <th>Time Behavior Happened</th>
          <th>Creator Category</th>
          <th>Creator-related Actions</th>
          <th>Operating System</th>
          <th>Connection Type</th>
          <th>Carriers</th>
          <th>Device Price</th>
          <th>OS Versions</th>
          <th>Targeting Expansion</th>
          <th>Targeting Settings to be Expanded</th>
          <th>Ad Group Budget Type</th>
          <th>Ad Group Budget Amount</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Dayparting</th>
          <th>Optimization Goal</th>
          <th>In-App Event</th>
          <th>Secondary Goal</th>
          <th>Billing Method</th>
          <th>Frequency Cap</th>
          <th>Bid Strategy</th>
          <th>Optimization Preference at Learning Phase</th>
          <th>Bid</th>
          <th>Bid for oCPC/M</th>
          <th>Bid for Secondary Goal</th>
          <th>Delivery Type</th>
          <th>Impression Tracking URL</th>
          <th>Click Tracking URL</th>
          <th>Ad ID</th>
          <th>Ad Status</th>
          <th>Ad Name</th>
          <th>Use TikTok Account</th>
          <th>Identity Type</th>
          <th>Identity ID</th>
          <th>Image Name</th>
          <th>Video Name</th>
          <th>Post ID</th>
          <th>Instant Form ID</th>
          <th>Text</th>
          <th>Call to Action</th>
          <th>Playable ID</th>
          <th>Auto Ad - Image Name</th>
          <th>Auto Ad - Video Name</th>
          <th>Auto Ad - Text</th>
          <th>Auto Ad - Call to Action</th>
        </tr>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td id="name"> {item.ios} </td>
            <td id="surname">{item.urlSettings}</td>
            <td id="age">{item.campaignID}</td>
            <td id="age">{item.campaignStatus}</td>
            <td id="age">{item.campaignName}</td>
            <td id="age">{item.adsObjective}</td>
            <td id="age">{item.budgetType}</td>
            <td id="age">{item.budgetAmount}</td>
            <td id="age">{item.budgetOptimization}</td>
            <td id="age">{item.campaignBidStrategy}</td>
            <td id="age">{item.campaignDelievery}</td>
            <td id="age">{item.adGroupID}</td>
            <td id="age">{item.adGroupStatus}</td>
            <td id="age">{item.adGroupName}</td>
            <td id="age">{item.placementTypes}</td>
            <td id="age">{item.placement}</td>
            <td id="age">{item.blockList}</td>
            <td id="age">{item.promotionType}</td>
            <td id="age">{item.webUrl}</td>
            <td id="age">{item.fallbackType}</td>
            <td id="age">{item.fallbackWebsite}</td>
            <td id="age">{item.tikTokPixelID}</td>
            <td id="age">{item.pixelEvent}</td>
            <td id="age">{item.appID}</td>
            <td id="age">{item.displayName}</td>
            <td id="age">{item.profileImage}</td>
            <td id="age">{item.userComments}</td>
            <td id="age">{item.videoDownload}</td>
            <td id="age">{item.automatedCreativeOpt}</td>
            <td id="age">{item.targetingMode}</td>
            <td id="age">{item.retargetUsers}</td>
            <td id="age">{item.audienceType}</td>
            <td id="age">{item.includeAudienceBehavior}</td>
            <td id="age">{item.excludeAudienceBehavior}</td>
            <td id="age">{item.includeAudienceID}</td>
            <td id="age">{item.excludeAudienceID}</td>
            <td id="age">{item.location}</td>
            <td id="age">{item.gender}</td>
            <td id="age">{item.age}</td>
            <td id="age">{item.languages}</td>
            <td id="age">{item.interestCategories}</td>
            <td id="age">{item.behaviorCategories}</td>
            <td id="age">{item.videoRelated}</td>
            <td id="age">{item.timeBehavior}</td>
            <td id="age">{item.creatorGategories}</td>
            <td id="age">{item.creatorRelatedActions}</td>
            <td id="age">{item.operatingSystem}</td>
            <td id="age">{item.connectionType}</td>
            <td id="age">{item.carriers}</td>
            <td id="age">{item.devicePrice}</td>
            <td id="age">{item.osVersions}</td>
            <td id="age">{item.targetingExpansion}</td>
            <td id="age">{item.targetingSettings}</td>
            <td id="age">{item.adGroupBudgetType}</td>
            <td id="age">{item.adGroupBudgetAmount}</td>
            <td id="age">{item.startTime}</td>
            <td id="age">{item.endTime}</td>
            <td id="age">{item.dayparting}</td>
            <td id="age">{item.optimizationGoal}</td>
            <td id="age">{item.appEvent}</td>
            <td id="age">{item.secondatyGoal}</td>
            <td id="age">{item.billingMethod}</td>
            <td id="age">{item.frequencyCap}</td>
            <td id="age">{item.bidStrategy}</td>
            <td id="age">{item.optPreference}</td>
            <td id="age">{item.bidForOCPC}</td>
            <td id="age">{item.bidForSecondary}</td>
            <td id="age">{item.delieveryType}</td>
            <td id="age">{item.impressionTrackingURL}</td>
            <td id="age">{item.clickTrackingURL}</td>
            <td id="age">{item.adID}</td>
            <td id="age">{item.adStatus}</td>
            <td id="age">{item.adName}</td>
            <td id="age">{item.useTikTokAccount}</td>
            <td id="age">{item.identityType}</td>
            <td id="age">{item.identityID}</td>
            <td id="age">{item.imageName}</td>
            <td id="age">{item.videoName}</td>
            <td id="age">{item.postID}</td>
            <td id="age">{item.instantFormID}</td>
            <td id="age">{item.text}</td>
            <td id="age">{item.callToAction}</td>
            <td id="age">{item.playableID}</td>
            <td id="age">{item.autoAdImage}</td>
            <td id="age">{item.autoAdVideo}</td>
            <td id="age">{item.autoAdText}</td>
            <td id="age">{item.autoAdCallToAction}</td>
          </tr>
        ))}
        {/* <tr>
          <td id='name'>Jill {heading} </td>
          <td id='surname'>Smith</td>
          <td id='age'>50</td>
        </tr>
        <tr>
          <td id='name'>Eve</td>
          <td id='surname'>Jackson</td>
          <td id='age'>94</td>
        </tr> */}
      </table>
    </div>
  )
}
