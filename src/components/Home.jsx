import React, { useState } from 'react';
import { CardTemplateList } from './CardTemplateList.jsx';
import TABS from '../constant';

function Home() {
	const [selectedTab, setActive] = useState(TABS.ALL);

  const handleSelectedTabs = (tab) => {
    setActive(tab);
  };

	return (
		<div>
			<div className="template-wrapper">
			<div className="header">
				<h1>
					Choose a Template
				</h1>
				<div className="tabs">
					<a onClick={() => handleSelectedTabs(TABS.ALL)} className={selectedTab === TABS.ALL ? 'active': null}>
						All
					</a>
					<a onClick={() => handleSelectedTabs(TABS.HAPPY_HOUR)} className={selectedTab === TABS.HAPPY_HOUR ? 'active': null}>
						Happy Hour
					</a>
					<a onClick={() => handleSelectedTabs(TABS.NETWORKING)} className={selectedTab === TABS.NETWORKING ? 'active': null}>
						Networking
					</a>
					<a onClick={() => handleSelectedTabs(TABS.ONBOARDING)} className={selectedTab === TABS.ONBOARDING ? 'active': null}>
						Onboarding & Orientation
					</a>
					<a onClick={() => handleSelectedTabs(TABS.SEASONAL)} className={selectedTab === TABS.SEASONAL ? 'active': null}>
						Seasonal
					</a>
				</div>
			</div>
		</div>
			<CardTemplateList type={selectedTab} />
		</div>
	);
}

export { Home };
