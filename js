import {LightningElement} from 'lwc';
export default class PathCmp extends LightningElement 
{
    pathHandler(event)
    {
        let targetId = event.currentTarget.id;
        console.log('target Id -->'+targetId);
        let len = targetId.length;
        console.log('Target Id length-->'+len);
        let mainTarId = targetId.charAt(4);
        console.log('Main Tar-->'+mainTarId);
        let targatPrefix = targetId.substring(5, len);
        console.log('Target Prefix-->'+targatPrefix);

        var selectedPath = this.template.querySelector("[id=" +targetId+ "]");
        if(selectedPath){
            this.template.querySelector("[id=" +targetId+ "]").className='slds-is-active slds-path__item';
        }
            for(let i = 0; i < mainTarId; i++){
                let selectedPath = this.template.querySelector("[id=pat-" +i+ targatPrefix+"]");
                if(selectedPath){
                    this.template.querySelector("[id=pat-" +i+ targatPrefix+"]").className='slds-is-complete slds-path__item';
                }
            }
            for(let i = mainTarId; i < 8; i++){
                if(i != mainTarId){
                    let selectedPath = this.template.querySelector("[id=pat-" +i+ targatPrefix+"]");
                    if(selectedPath){
                        this.template.querySelector("[id=pat-" +i+targatPrefix+ "]").className='slds-is-incomplete slds-path__item';
                    }
                }
            }
    
    }
}
