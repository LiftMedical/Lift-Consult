// Editorial content only. No scores or automatic treatment recommendations.
export const MODULES = [
 {id:'individual',title:'Why faces age differently',short:'Your individual pattern',group:'understand',art:'all',reference:'assessment',summary:'One face. More than one kind of change.',slides:[
  {eyebrow:'The whole picture',title:'The same age.\nA different story.',text:'Support, tissue position, fullness and skin quality can change in different ways.',art:'all',labels:['Support','Position','Fullness','Skin']},
  {eyebrow:'Your individual pattern',title:'More than one\narea may contribute.',text:'A hollow area and a fuller area can exist together. We look at how the parts relate.',art:'compare',labels:['Where support is reduced','Where tissue is fuller']},
  {eyebrow:'Our approach',title:'Your assessment\nsets the priorities.',text:'We choose the explanations and treatment options that relate to your face and your goals.',art:'all',labels:['Understand the change','Discuss what matters','Choose together']}
 ]},
 {id:'support',title:'Structural Support',short:'The underlying foundation',group:'understand',art:'support',reference:'assessment',summary:'Understanding flattening and hollowing.',slides:[
  {eyebrow:'What changes',title:'The foundation\nshapes the surface.',text:'Changes in deep support can appear as flattening or hollowing.',art:'support',labels:['Cheek support','Temple hollowing','Chin contour']},
  {eyebrow:'What we look at',title:'Support and fullness\nare different questions.',text:'We assess where support is reduced and where adding volume may be unnecessary.',art:'compare',labels:['Reduced support','Existing fullness']},
  {eyebrow:'The treatment principle',title:'Be precise about\nwhat needs support.',text:'If treatment is appropriate, the area and type of support guide the choice.',art:'biology',labels:['Individual anatomy','Targeted support','Facial balance']}
 ]},
 {id:'mobility',title:'Mobility & Descent',short:'Where the tissues sit',group:'understand',art:'mobility',reference:'assessment',summary:'Understanding changes in tissue position.',slides:[
  {eyebrow:'What changes',title:'Position changes\nthe contour.',text:'As facial tissues shift, the cheek, folds and jawline can look different.',art:'mobility',labels:['Cheek position','Facial folds','Jawline definition']},
  {eyebrow:'What we look at',title:'A fold is part of\na bigger picture.',text:'We assess the surrounding support, tissue position and skin—not only the visible line.',art:'all',labels:['Support','Position','Skin']},
  {eyebrow:'The treatment principle',title:'Match the approach\nto the degree of change.',text:'We discuss whether remodeling, tightening or a surgical opinion fits the findings and your goals.',art:'remodeling',labels:['Anatomy','Expected benefit','Recovery']}
 ]},
 {id:'burden',title:'Tissue Burden',short:'The amount of tissue',group:'understand',art:'burden',reference:'assessment',summary:'Understanding fullness and facial balance.',slides:[
  {eyebrow:'What changes',title:'Fullness influences\nfacial shape.',text:'The amount and distribution of tissue affect the cheeks, jawline and area under the chin.',art:'burden',labels:['Cheek fullness','Jowl bulk','Under-chin fullness']},
  {eyebrow:'What we look at',title:'Fullness can coexist\nwith hollowing.',text:'Different areas may have different needs. We assess the face as a whole.',art:'compare',labels:['An area with less support','An area with more fullness']},
  {eyebrow:'The treatment principle',title:'More volume is not\nalways the answer.',text:'We first distinguish fullness from displacement and skin laxity before discussing options.',art:'all',labels:['Amount of tissue','Position of tissue','Skin quality']}
 ]},
 {id:'envelope',title:'Skin & Envelope',short:'The surface and its quality',group:'understand',art:'envelope',reference:'assessment',summary:'Understanding texture, tone and laxity.',slides:[
  {eyebrow:'What changes',title:'The surface has\nits own story.',text:'Texture, pigmentation, fine lines and skin laxity all contribute to appearance.',art:'envelope',labels:['Texture','Tone','Fine lines','Laxity']},
  {eyebrow:'What we look at',title:'Similar concerns.\nDifferent causes.',text:'A movement-related line, a pigment change and loose skin need different conversations.',art:'refinement',labels:['Expression','Pigment','Firmness']},
  {eyebrow:'The treatment principle',title:'Choose the treatment\nfor the skin concern.',text:'We discuss skin care and selected procedures according to your skin, goals and recovery preferences.',art:'remodeling',labels:['Skin quality','Suitability','Ongoing care']}
 ]},
 {id:'remodeling',title:'Tissue Remodeling & Tightening',short:'Firmness & tissue quality',group:'approach',art:'remodeling',reference:'remodeling',summary:'QuantumRF or Morpheus8, selected by assessment.',slides:[
  {eyebrow:'Treatment focus',title:'A focus on firmness\nand tissue quality.',text:'QuantumRF and Morpheus8 use radiofrequency in different ways. The choice follows your assessment.',art:'remodeling',labels:['QuantumRF','or','Morpheus8']},
  {eyebrow:'Two different approaches',title:'The depth and\ndelivery matter.',text:'QuantumRF delivers energy beneath the skin. Morpheus8 combines microneedling with radiofrequency.',art:'remodeling',options:[['QuantumRF','Beneath-skin soft-tissue contraction'],['Morpheus8','RF microneedling for tissue remodeling']]},
  {eyebrow:'Your discussion',title:'Choose for your\nanatomy and priorities.',text:'We discuss expected benefit, risks and recovery. These options do not reproduce a surgical lift.',art:'mobility',labels:['Degree of laxity','Tissue needs','Recovery preferences']}
 ]},
 {id:'biology',title:'Structural Support & Biological Optimization',short:'Support & collagen stimulation',group:'approach',art:'biology',reference:'biology',summary:'Biostimulators: Sculptra and Radiesse.',slides:[
  {eyebrow:'Treatment focus',title:'Support and your\nown collagen.',text:'Biostimulators can help address selected tissue needs through collagen stimulation.',art:'biology',labels:['Sculptra','Radiesse']},
  {eyebrow:'Different roles',title:'The product choice\nhas a purpose.',text:'Sculptra works gradually through collagen stimulation. Radiesse can offer contour support and collagen stimulation, depending on its use.',art:'biology',options:[['Sculptra','Gradual collagen stimulation'],['Radiesse','Support and collagen stimulation']]},
  {eyebrow:'Your discussion',title:'A considered choice.\nA gradual response.',text:'We discuss suitability, the intended area and how the response will be reviewed over time.',art:'support',labels:['Tissue needs','Product choice','Review over time']}
 ]},
 {id:'refinement',title:'Refinement',short:'The details that matter',group:'approach',art:'refinement',reference:'refinement',summary:'Botox, skin boosters, fillers and IPL.',slides:[
  {eyebrow:'Treatment focus',title:'Match the treatment\nto the detail.',text:'Expression, hydration, contour and pigmentation are different treatment targets.',art:'refinement',labels:['Expression','Hydration','Contour','Tone']},
  {eyebrow:'Selected options',title:'Each option has\na different role.',text:'Treatment selection depends on the concern and the product or device used.',art:'refinement',options:[['Botox','Movement-related expression lines'],['Skin boosters','Hydration and skin quality'],['Fillers','Targeted volume and contour'],['IPL','Selected pigment and visible vessels']]},
  {eyebrow:'Your discussion',title:'A detail can be\nthe whole priority.',text:'Refinement may stand alone or complement another treatment focus. There is no fixed sequence.',art:'envelope',labels:['Your concerns','Facial balance','Individual priorities']}
 ]}
];
export const DEFAULT_FAVORITES = ['individual','support','mobility','biology','refinement'];
export function safeFavorites(value) { return Array.isArray(value) ? [...new Set(value.filter(id=>MODULES.some(m=>m.id===id)))] : [...DEFAULT_FAVORITES]; }
export function readRoute(hash) { const [id,raw] = hash.replace(/^#\/?/,'').split('/'); const module=MODULES.find(m=>m.id===id); return module ? {module,index:Math.max(0,Math.min(module.slides.length-1,Number.isFinite(Number(raw))?Math.trunc(Number(raw)):0))} : null; }
