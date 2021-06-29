# Memory Retention with Spaced Repetition

We only have limited memory, hence brain discards or remove memory which are not used frequently. So to remember more we have to do repetition optimally. Our intention is to use todo not only to track to completion one time, but also to intelligently recommend repetition so that we can remember more.

## Inspiration

<br>

### Optimal Interval: for i<sup>th</sup> repetition.

I<sub>i</sub> = I<sub>1</sub>.C<sub>2</sub><sup>(i-1)</sup>

where:

> **_I<sub>1</sub>_** : is the first interval.  
> **_C<sub>2</sub>_** : is a increment constant.  
> **_I<sub>i</sub>_** : is the interval after i<sup>th</sup> iteration.

<br/>
<br/>

### Stability: after i<sup>th</sup> repetition

S<sub>i</sub> = -(s<sub>i</sub>)/ln(K)

where:

> **_s<sub>i</sub>_** : is the optimal Interval for i<sup>th</sup> revision where _Retention Rate_ is still **X%** (say 95%)  
> **_r<sub>i</sub>_** : is the elapsed time after last revision.  
> **_K_** : is the constant factor indicating percentage _(say 0.95 for 95%)_

<br/>

> _Note: r is less than s on optimal condition(when the Retention Rate is >=X%, say 95%)_

<br/>
<br/>

### Retrieval rate: at time (t) after i<sup>th</sup> repetition

R<sub>i</sub>(t) = e<sup>-t/S<sup>

where:

> **_R<sub>i</sub>(t)_** : is the Retention Rate after i<sup>th</sup> revision.  
> **_t_** : is the time elapsed after i<sup>th</sup> revision
