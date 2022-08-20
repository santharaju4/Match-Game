import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTab, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClass = isActive ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    onClickTab(tabId)
  }

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeTabClass}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
