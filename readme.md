# Memory Retention with Spaced Repetition

We only have limited memory, hence brain discards or remove memory which are not used frequently. So to remember more we have to do repetition optimally. Our intention is to use todo not only to track to completion one time, but also to intelligently recommend repetition so that we can remember more.

## Inspiration

<hr/>

### Optimal Interval: for i<sup>th</sup> repetition.

I<sub>i</sub> = I<sub>1</sub>.C<sub>2</sub><sup>(i-1)</sup>

where:

> **I<sub>1</sub>** is the first interval.  
> **C<sub>2</sub>** is a increment constant.  
> **I<sub>i</sub>** is the interval after i<sup>th</sup> iteration.

<br/>
<hr/>

### Stability: after i<sup>th</sup> repetition

S<sub>i</sub> = -(s<sub>i</sub>)/ln(K)

where:

> **s<sub>i</sub>** is the optimal Interval for i<sup>th</sup> revision where _Retention Rate_ is still **X%** (say 95%)  
> **r<sub>i</sub>** is the elapsed time after last revision.  
> **K** is the constant factor indicating percentage _(say 0.95 for 95%)_

<br/>

> _Note: r is less than s on optimal condition(when the Retention Rate is >=X%, say 95%)_

<hr/>

### Retrieval rate: at time (t) after i<sup>th</sup> repetition

R<sub>i</sub>(t) = e<sup>-t/S<sup>

> R<sub>i</sub>(t) is the Retention Rate after i<sup>th</sup> revision.  
> t is the time elapsed after i<sup>th</sup> revision
