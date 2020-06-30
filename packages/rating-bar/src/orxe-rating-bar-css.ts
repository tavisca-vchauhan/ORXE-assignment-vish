import { css } from 'lit-element';
export default css`
:host{     
    --rating-bar-excellent: #238738;
    --rating-bar-great: #67AB04;
    --rating-bar-average: #D99B22;
    --rating-bar-poor: #D97322;
    --rating-bar-bad: #D9222A;
    --track-color:  #E1E6ED;
    --font-family: san-serif;
    --font-size: 1rem;
    --font-color: #000000;
    --font-weight: 100
}
#linear {
  width: 100%;  
  border-radius: 4px;
  background-color:var(--track-color)
}

 .linear-bar__indicator {
	 border-radius: 4px;
	 height: 8px;
   margin-bottom: 8px;    
}
 .linear-bar__indicator.linear-bar--excellent {
	 background-color: var(--rating-bar-excellent);
}
 .linear-bar__indicator.linear-bar--great {
	 background-color: var(--rating-bar-great);
}
 .linear-bar__indicator.linear-bar--average {
	 background-color: var(--rating-bar-average);
}
 .linear-bar__indicator.linear-bar--poor {
	 background-color: var(--rating-bar-poor);
}
 .linear-bar__indicator.linear-bar--bad {
	 background-color: var(--rating-bar-bad);
}
 .ratingData {
   margin-top: 16px;
   font-family:var(--font-family);
   font-size:var(--font-size);
   font-weight: var(--font-weight);
   color:var(--font-color)
}
 .ratingLabel {
   float: left;'
  
}
 .ratingValue {
   float: right;   
}`;

