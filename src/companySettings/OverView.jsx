import React from 'react'
import './overview.scss'

const OverView = () => {
  return (
    <div className='overviewContainer'>
        <div className='workspaceHandle'>
            <div>
            <h1>Workspace Handle</h1>
            <p>Upgrade Your Web Presence: Switch to Your Custom Domain</p>
            </div>
            <div className='workspaceInputContainer'>
               <input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" />  
               <button>Add text</button>
            </div>
        </div>
       

        <div className='business'>
             {/* Copy pate the myprofile code */}
        </div>
        <div className='timeZone'>
            <div className='timeZoneHeadding'>
                <h1>Time Zone</h1>
                <p>Your email send times, account data, and analytics information will be displayed in the timezone you select below.</p>
            </div>
            {/* Options container for the time zone */}
            <div>

            </div>
        </div>
        <div className='currency'>
            <div className='currencyheadding'>
                <h1>Currency</h1>
                <p>Note that once selected, the currency symbol will change, but the values won't be converted. For example, switching from ₹ to $ will change the symbol but not the actual value displayed.</p>
            </div>
            <div>
                {/* Keep drop down */}
            </div>
        </div>
        <div className='deleteWorkspace'>
            <div>
                <h1>Delete Workspace</h1>
            </div>
            <div>
                <h1>Do you want to delete your workspace?</h1>
                <p>When you delete your workspace, all your work will be permanently lost and cannot be recovered. Additionally, all members associated with this workspace will lose access. You will be billed for the month, but you'll receive a refund for the remaining duration.</p>
            </div>
        </div>
    </div>
  )
}

export default OverView
