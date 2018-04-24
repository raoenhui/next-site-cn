import {Component} from 'react'
import Icons from '../components/icons'
import Page from '../components/page'
import Slider from '../components/showcase-slider'

const screenshots = [
  {
    src: '/static/images/showcases/magic-leap.png',
    placeholder: '/static/images/showcases/magic-leap.svg',
    // placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1024" height="584"><rect x="0" y="0" width="1024" height="584" fill="%23acc9d8" /><g transform="scale(4.000000) translate(0.5 0.5)"><polygon fill="%23340000" fill-opacity="0.501961" points="55,43 158,105 59,105" /><polygon fill="%23008bdd" fill-opacity="0.501961" points="-16,47 271,48 42,-16" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="253,161 -16,142 271,55" /><polygon fill="%230084df" fill-opacity="0.501961" points="47,-16 271,-16 255,43" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="-16,50 64,48 13,161" /><polygon fill="%232a0600" fill-opacity="0.501961" points="154,50 154,79 209,76" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="238,39 271,142 104,161" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="111,161 12,45 -16,143" /><polygon fill="%23452f15" fill-opacity="0.501961" points="150,104 58,105 148,78" /><polygon fill="%23140400" fill-opacity="0.501961" points="56,105 56,54 85,54" /><polygon fill="%23fffacc" fill-opacity="0.501961" points="164,32 120,16 91,31" /><polygon fill="%23ffebcd" fill-opacity="0.501961" points="112,84 167,49 81,48" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="196,49 225,161 271,46" /><polygon fill="%232b1d16" fill-opacity="0.501961" points="199,53 200,78 162,78" /><polygon fill="%23299bda" fill-opacity="0.501961" points="6,-16 122,47 -14,47" /><polygon fill="%23bd8250" fill-opacity="0.501961" points="95,50 109,84 54,89" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="54,49 58,161 -16,48" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="208,161 59,106 271,108" /><polygon fill="%23a61600" fill-opacity="0.501961" points="100,135 82,131 100,124" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="41,48 68,56 97,48" /><polygon fill="%23dcc0a8" fill-opacity="0.501961" points="154,87 149,52 89,79" /><polygon fill="%2330a0da" fill-opacity="0.501961" points="242,-16 131,44 271,49" /><polygon fill="%2343a6de" fill-opacity="0.501961" points="172,24 -16,26 22,-16" /><polygon fill="%23644d37" fill-opacity="0.501961" points="59,105 56,77 150,106" /><polygon fill="%23e3f6fa" fill-opacity="0.501961" points="207,80 152,78 147,161" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="271,48 246,161 196,49" /><polygon fill="%23ffce29" fill-opacity="0.501961" points="161,33 134,29 151,24" /><polygon fill="%23ffffff" fill-opacity="0.501961" points="109,158 -16,157 2,49" /><polygon fill="%23000100" fill-opacity="0.501961" points="87,55 56,56 56,77" /><polygon fill="%23796e61" fill-opacity="0.501961" points="173,76 156,56 201,54" /></g></svg>',
  },
  {
    src: '/static/images/showcases/shocases-00.png',
    placeholder: '/static/images/showcases/shocases-00.svg',
    // placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="720"><rect x="0" y="0" width="1280" height="720" fill="%236f8fa4" /><g transform="scale(4.000000) translate(0.5 0.5)"><polygon fill="%230a78ff" fill-opacity="0.501961" points="271,67 252,-16 -16,2" /><polygon fill="%239f8052" fill-opacity="0.501961" points="-16,108 271,161 161,42" /><polygon fill="%23ecd782" fill-opacity="0.501961" points="112,77 266,123 254,62" /><polygon fill="%23000042" fill-opacity="0.501961" points="82,89 121,71 107,161" /><polygon fill="%230786ff" fill-opacity="0.501961" points="66,48 9,-16 -16,62" /><polygon fill="%23aab58e" fill-opacity="0.501961" points="77,161 -16,97 102,-16" /><polygon fill="%23540000" fill-opacity="0.501961" points="143,42 172,69 135,67" /><polygon fill="%231267ff" fill-opacity="0.501961" points="233,46 55,-8 271,-1" /><polygon fill="%23728eb2" fill-opacity="0.501961" points="147,45 82,98 45,-16" /><polygon fill="%23701e15" fill-opacity="0.501961" points="166,91 131,107 153,138" /><polygon fill="%23d5da90" fill-opacity="0.501961" points="83,78 4,99 -10,66" /><polygon fill="%2349b8db" fill-opacity="0.501961" points="169,71 271,64 172,17" /><polygon fill="%23a09e9c" fill-opacity="0.501961" points="137,105 108,15 37,-16" /><polygon fill="%2335254d" fill-opacity="0.501961" points="118,161 109,48 87,140" /><polygon fill="%237eb790" fill-opacity="0.501961" points="253,161 158,113 258,105" /><polygon fill="%23289eff" fill-opacity="0.501961" points="113,11 147,29 126,70" /><polygon fill="%23277afd" fill-opacity="0.501961" points="-16,25 66,56 34,-16" /><polygon fill="%23cf2a0b" fill-opacity="0.501961" points="136,50 169,64 157,39" /><polygon fill="%23b67a5c" fill-opacity="0.501961" points="160,100 252,120 256,94" /><polygon fill="%23b4ceac" fill-opacity="0.501961" points="159,80 129,102 108,48" /><polygon fill="%23661c3f" fill-opacity="0.501961" points="57,37 89,34 73,48" /><polygon fill="%234eb0c8" fill-opacity="0.501961" points="60,7 36,71 -16,68" /><polygon fill="%23b47b5f" fill-opacity="0.501961" points="87,101 -16,123 -16,88" /><polygon fill="%23b6c99c" fill-opacity="0.501961" points="166,66 228,63 165,117" /><polygon fill="%2374b387" fill-opacity="0.501961" points="86,161 90,107 -16,133" /><polygon fill="%23467cc5" fill-opacity="0.501961" points="104,95 99,38 77,82" /><polygon fill="%232c80ff" fill-opacity="0.501961" points="270,44 120,38 230,-16" /><polygon fill="%23bbc496" fill-opacity="0.501961" points="-16,82 81,100 75,60" /><polygon fill="%236a7165" fill-opacity="0.501961" points="142,151 191,149 118,97" /><polygon fill="%23400702" fill-opacity="0.501961" points="167,64 154,75 134,53" /></g></svg>'
  },
  {
    src: '/static/images/showcases/shocases-01.png',
    placeholder: '/static/images/showcases/shocases-01.svg',
    // placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="720"><rect x="0" y="0" width="1280" height="720" fill="%236f8fa4" /><g transform="scale(4.000000) translate(0.5 0.5)"><polygon fill="%230a78ff" fill-opacity="0.501961" points="271,67 252,-16 -16,2" /><polygon fill="%239f8052" fill-opacity="0.501961" points="-16,108 271,161 161,42" /><polygon fill="%23ecd782" fill-opacity="0.501961" points="112,77 266,123 254,62" /><polygon fill="%23000042" fill-opacity="0.501961" points="82,89 121,71 107,161" /><polygon fill="%230786ff" fill-opacity="0.501961" points="66,48 9,-16 -16,62" /><polygon fill="%23aab58e" fill-opacity="0.501961" points="77,161 -16,97 102,-16" /><polygon fill="%23540000" fill-opacity="0.501961" points="143,42 172,69 135,67" /><polygon fill="%231267ff" fill-opacity="0.501961" points="233,46 55,-8 271,-1" /><polygon fill="%23728eb2" fill-opacity="0.501961" points="147,45 82,98 45,-16" /><polygon fill="%23701e15" fill-opacity="0.501961" points="166,91 131,107 153,138" /><polygon fill="%23d5da90" fill-opacity="0.501961" points="83,78 4,99 -10,66" /><polygon fill="%2349b8db" fill-opacity="0.501961" points="169,71 271,64 172,17" /><polygon fill="%23a09e9c" fill-opacity="0.501961" points="137,105 108,15 37,-16" /><polygon fill="%2335254d" fill-opacity="0.501961" points="118,161 109,48 87,140" /><polygon fill="%237eb790" fill-opacity="0.501961" points="253,161 158,113 258,105" /><polygon fill="%23289eff" fill-opacity="0.501961" points="113,11 147,29 126,70" /><polygon fill="%23277afd" fill-opacity="0.501961" points="-16,25 66,56 34,-16" /><polygon fill="%23cf2a0b" fill-opacity="0.501961" points="136,50 169,64 157,39" /><polygon fill="%23b67a5c" fill-opacity="0.501961" points="160,100 252,120 256,94" /><polygon fill="%23b4ceac" fill-opacity="0.501961" points="159,80 129,102 108,48" /><polygon fill="%23661c3f" fill-opacity="0.501961" points="57,37 89,34 73,48" /><polygon fill="%234eb0c8" fill-opacity="0.501961" points="60,7 36,71 -16,68" /><polygon fill="%23b47b5f" fill-opacity="0.501961" points="87,101 -16,123 -16,88" /><polygon fill="%23b6c99c" fill-opacity="0.501961" points="166,66 228,63 165,117" /><polygon fill="%2374b387" fill-opacity="0.501961" points="86,161 90,107 -16,133" /><polygon fill="%23467cc5" fill-opacity="0.501961" points="104,95 99,38 77,82" /><polygon fill="%232c80ff" fill-opacity="0.501961" points="270,44 120,38 230,-16" /><polygon fill="%23bbc496" fill-opacity="0.501961" points="-16,82 81,100 75,60" /><polygon fill="%236a7165" fill-opacity="0.501961" points="142,151 191,149 118,97" /><polygon fill="%23400702" fill-opacity="0.501961" points="167,64 154,75 134,53" /></g></svg>'
  },
  {
    src: '/static/images/showcases/shocases-02.png',
    placeholder: '/static/images/showcases/shocases-02.svg',
    // placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="720"><rect x="0" y="0" width="1280" height="720" fill="%236f8fa4" /><g transform="scale(4.000000) translate(0.5 0.5)"><polygon fill="%230a78ff" fill-opacity="0.501961" points="271,67 252,-16 -16,2" /><polygon fill="%239f8052" fill-opacity="0.501961" points="-16,108 271,161 161,42" /><polygon fill="%23ecd782" fill-opacity="0.501961" points="112,77 266,123 254,62" /><polygon fill="%23000042" fill-opacity="0.501961" points="82,89 121,71 107,161" /><polygon fill="%230786ff" fill-opacity="0.501961" points="66,48 9,-16 -16,62" /><polygon fill="%23aab58e" fill-opacity="0.501961" points="77,161 -16,97 102,-16" /><polygon fill="%23540000" fill-opacity="0.501961" points="143,42 172,69 135,67" /><polygon fill="%231267ff" fill-opacity="0.501961" points="233,46 55,-8 271,-1" /><polygon fill="%23728eb2" fill-opacity="0.501961" points="147,45 82,98 45,-16" /><polygon fill="%23701e15" fill-opacity="0.501961" points="166,91 131,107 153,138" /><polygon fill="%23d5da90" fill-opacity="0.501961" points="83,78 4,99 -10,66" /><polygon fill="%2349b8db" fill-opacity="0.501961" points="169,71 271,64 172,17" /><polygon fill="%23a09e9c" fill-opacity="0.501961" points="137,105 108,15 37,-16" /><polygon fill="%2335254d" fill-opacity="0.501961" points="118,161 109,48 87,140" /><polygon fill="%237eb790" fill-opacity="0.501961" points="253,161 158,113 258,105" /><polygon fill="%23289eff" fill-opacity="0.501961" points="113,11 147,29 126,70" /><polygon fill="%23277afd" fill-opacity="0.501961" points="-16,25 66,56 34,-16" /><polygon fill="%23cf2a0b" fill-opacity="0.501961" points="136,50 169,64 157,39" /><polygon fill="%23b67a5c" fill-opacity="0.501961" points="160,100 252,120 256,94" /><polygon fill="%23b4ceac" fill-opacity="0.501961" points="159,80 129,102 108,48" /><polygon fill="%23661c3f" fill-opacity="0.501961" points="57,37 89,34 73,48" /><polygon fill="%234eb0c8" fill-opacity="0.501961" points="60,7 36,71 -16,68" /><polygon fill="%23b47b5f" fill-opacity="0.501961" points="87,101 -16,123 -16,88" /><polygon fill="%23b6c99c" fill-opacity="0.501961" points="166,66 228,63 165,117" /><polygon fill="%2374b387" fill-opacity="0.501961" points="86,161 90,107 -16,133" /><polygon fill="%23467cc5" fill-opacity="0.501961" points="104,95 99,38 77,82" /><polygon fill="%232c80ff" fill-opacity="0.501961" points="270,44 120,38 230,-16" /><polygon fill="%23bbc496" fill-opacity="0.501961" points="-16,82 81,100 75,60" /><polygon fill="%236a7165" fill-opacity="0.501961" points="142,151 191,149 118,97" /><polygon fill="%23400702" fill-opacity="0.501961" points="167,64 154,75 134,53" /></g></svg>'
  },
  {
    src: '/static/images/showcases/shocases-03.png',
    placeholder: '/static/images/showcases/shocases-03.svg',
    // placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="720"><rect x="0" y="0" width="1280" height="720" fill="%236f8fa4" /><g transform="scale(4.000000) translate(0.5 0.5)"><polygon fill="%230a78ff" fill-opacity="0.501961" points="271,67 252,-16 -16,2" /><polygon fill="%239f8052" fill-opacity="0.501961" points="-16,108 271,161 161,42" /><polygon fill="%23ecd782" fill-opacity="0.501961" points="112,77 266,123 254,62" /><polygon fill="%23000042" fill-opacity="0.501961" points="82,89 121,71 107,161" /><polygon fill="%230786ff" fill-opacity="0.501961" points="66,48 9,-16 -16,62" /><polygon fill="%23aab58e" fill-opacity="0.501961" points="77,161 -16,97 102,-16" /><polygon fill="%23540000" fill-opacity="0.501961" points="143,42 172,69 135,67" /><polygon fill="%231267ff" fill-opacity="0.501961" points="233,46 55,-8 271,-1" /><polygon fill="%23728eb2" fill-opacity="0.501961" points="147,45 82,98 45,-16" /><polygon fill="%23701e15" fill-opacity="0.501961" points="166,91 131,107 153,138" /><polygon fill="%23d5da90" fill-opacity="0.501961" points="83,78 4,99 -10,66" /><polygon fill="%2349b8db" fill-opacity="0.501961" points="169,71 271,64 172,17" /><polygon fill="%23a09e9c" fill-opacity="0.501961" points="137,105 108,15 37,-16" /><polygon fill="%2335254d" fill-opacity="0.501961" points="118,161 109,48 87,140" /><polygon fill="%237eb790" fill-opacity="0.501961" points="253,161 158,113 258,105" /><polygon fill="%23289eff" fill-opacity="0.501961" points="113,11 147,29 126,70" /><polygon fill="%23277afd" fill-opacity="0.501961" points="-16,25 66,56 34,-16" /><polygon fill="%23cf2a0b" fill-opacity="0.501961" points="136,50 169,64 157,39" /><polygon fill="%23b67a5c" fill-opacity="0.501961" points="160,100 252,120 256,94" /><polygon fill="%23b4ceac" fill-opacity="0.501961" points="159,80 129,102 108,48" /><polygon fill="%23661c3f" fill-opacity="0.501961" points="57,37 89,34 73,48" /><polygon fill="%234eb0c8" fill-opacity="0.501961" points="60,7 36,71 -16,68" /><polygon fill="%23b47b5f" fill-opacity="0.501961" points="87,101 -16,123 -16,88" /><polygon fill="%23b6c99c" fill-opacity="0.501961" points="166,66 228,63 165,117" /><polygon fill="%2374b387" fill-opacity="0.501961" points="86,161 90,107 -16,133" /><polygon fill="%23467cc5" fill-opacity="0.501961" points="104,95 99,38 77,82" /><polygon fill="%232c80ff" fill-opacity="0.501961" points="270,44 120,38 230,-16" /><polygon fill="%23bbc496" fill-opacity="0.501961" points="-16,82 81,100 75,60" /><polygon fill="%236a7165" fill-opacity="0.501961" points="142,151 191,149 118,97" /><polygon fill="%23400702" fill-opacity="0.501961" points="167,64 154,75 134,53" /></g></svg>'
  },
  {
    src: '/static/images/showcases/shocases-04.png',
    placeholder: '/static/images/showcases/shocases-04.svg',
    // placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="720"><rect x="0" y="0" width="1280" height="720" fill="%236f8fa4" /><g transform="scale(4.000000) translate(0.5 0.5)"><polygon fill="%230a78ff" fill-opacity="0.501961" points="271,67 252,-16 -16,2" /><polygon fill="%239f8052" fill-opacity="0.501961" points="-16,108 271,161 161,42" /><polygon fill="%23ecd782" fill-opacity="0.501961" points="112,77 266,123 254,62" /><polygon fill="%23000042" fill-opacity="0.501961" points="82,89 121,71 107,161" /><polygon fill="%230786ff" fill-opacity="0.501961" points="66,48 9,-16 -16,62" /><polygon fill="%23aab58e" fill-opacity="0.501961" points="77,161 -16,97 102,-16" /><polygon fill="%23540000" fill-opacity="0.501961" points="143,42 172,69 135,67" /><polygon fill="%231267ff" fill-opacity="0.501961" points="233,46 55,-8 271,-1" /><polygon fill="%23728eb2" fill-opacity="0.501961" points="147,45 82,98 45,-16" /><polygon fill="%23701e15" fill-opacity="0.501961" points="166,91 131,107 153,138" /><polygon fill="%23d5da90" fill-opacity="0.501961" points="83,78 4,99 -10,66" /><polygon fill="%2349b8db" fill-opacity="0.501961" points="169,71 271,64 172,17" /><polygon fill="%23a09e9c" fill-opacity="0.501961" points="137,105 108,15 37,-16" /><polygon fill="%2335254d" fill-opacity="0.501961" points="118,161 109,48 87,140" /><polygon fill="%237eb790" fill-opacity="0.501961" points="253,161 158,113 258,105" /><polygon fill="%23289eff" fill-opacity="0.501961" points="113,11 147,29 126,70" /><polygon fill="%23277afd" fill-opacity="0.501961" points="-16,25 66,56 34,-16" /><polygon fill="%23cf2a0b" fill-opacity="0.501961" points="136,50 169,64 157,39" /><polygon fill="%23b67a5c" fill-opacity="0.501961" points="160,100 252,120 256,94" /><polygon fill="%23b4ceac" fill-opacity="0.501961" points="159,80 129,102 108,48" /><polygon fill="%23661c3f" fill-opacity="0.501961" points="57,37 89,34 73,48" /><polygon fill="%234eb0c8" fill-opacity="0.501961" points="60,7 36,71 -16,68" /><polygon fill="%23b47b5f" fill-opacity="0.501961" points="87,101 -16,123 -16,88" /><polygon fill="%23b6c99c" fill-opacity="0.501961" points="166,66 228,63 165,117" /><polygon fill="%2374b387" fill-opacity="0.501961" points="86,161 90,107 -16,133" /><polygon fill="%23467cc5" fill-opacity="0.501961" points="104,95 99,38 77,82" /><polygon fill="%232c80ff" fill-opacity="0.501961" points="270,44 120,38 230,-16" /><polygon fill="%23bbc496" fill-opacity="0.501961" points="-16,82 81,100 75,60" /><polygon fill="%236a7165" fill-opacity="0.501961" points="142,151 191,149 118,97" /><polygon fill="%23400702" fill-opacity="0.501961" points="167,64 154,75 134,53" /></g></svg>'
  },
  {
    src: '/static/images/showcases/shocases-05.png',
    placeholder: '/static/images/showcases/shocases-05.svg',
    // placeholder: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="1280" height="720"><rect x="0" y="0" width="1280" height="720" fill="%236f8fa4" /><g transform="scale(4.000000) translate(0.5 0.5)"><polygon fill="%230a78ff" fill-opacity="0.501961" points="271,67 252,-16 -16,2" /><polygon fill="%239f8052" fill-opacity="0.501961" points="-16,108 271,161 161,42" /><polygon fill="%23ecd782" fill-opacity="0.501961" points="112,77 266,123 254,62" /><polygon fill="%23000042" fill-opacity="0.501961" points="82,89 121,71 107,161" /><polygon fill="%230786ff" fill-opacity="0.501961" points="66,48 9,-16 -16,62" /><polygon fill="%23aab58e" fill-opacity="0.501961" points="77,161 -16,97 102,-16" /><polygon fill="%23540000" fill-opacity="0.501961" points="143,42 172,69 135,67" /><polygon fill="%231267ff" fill-opacity="0.501961" points="233,46 55,-8 271,-1" /><polygon fill="%23728eb2" fill-opacity="0.501961" points="147,45 82,98 45,-16" /><polygon fill="%23701e15" fill-opacity="0.501961" points="166,91 131,107 153,138" /><polygon fill="%23d5da90" fill-opacity="0.501961" points="83,78 4,99 -10,66" /><polygon fill="%2349b8db" fill-opacity="0.501961" points="169,71 271,64 172,17" /><polygon fill="%23a09e9c" fill-opacity="0.501961" points="137,105 108,15 37,-16" /><polygon fill="%2335254d" fill-opacity="0.501961" points="118,161 109,48 87,140" /><polygon fill="%237eb790" fill-opacity="0.501961" points="253,161 158,113 258,105" /><polygon fill="%23289eff" fill-opacity="0.501961" points="113,11 147,29 126,70" /><polygon fill="%23277afd" fill-opacity="0.501961" points="-16,25 66,56 34,-16" /><polygon fill="%23cf2a0b" fill-opacity="0.501961" points="136,50 169,64 157,39" /><polygon fill="%23b67a5c" fill-opacity="0.501961" points="160,100 252,120 256,94" /><polygon fill="%23b4ceac" fill-opacity="0.501961" points="159,80 129,102 108,48" /><polygon fill="%23661c3f" fill-opacity="0.501961" points="57,37 89,34 73,48" /><polygon fill="%234eb0c8" fill-opacity="0.501961" points="60,7 36,71 -16,68" /><polygon fill="%23b47b5f" fill-opacity="0.501961" points="87,101 -16,123 -16,88" /><polygon fill="%23b6c99c" fill-opacity="0.501961" points="166,66 228,63 165,117" /><polygon fill="%2374b387" fill-opacity="0.501961" points="86,161 90,107 -16,133" /><polygon fill="%23467cc5" fill-opacity="0.501961" points="104,95 99,38 77,82" /><polygon fill="%232c80ff" fill-opacity="0.501961" points="270,44 120,38 230,-16" /><polygon fill="%23bbc496" fill-opacity="0.501961" points="-16,82 81,100 75,60" /><polygon fill="%236a7165" fill-opacity="0.501961" points="142,151 191,149 118,97" /><polygon fill="%23400702" fill-opacity="0.501961" points="167,64 154,75 134,53" /></g></svg>'
  }
]

const BottomNav = ({prev, onClick}) => (
  <div className={`nav ${prev ? 'prev' : 'next'}`}>
    <button onClick={onClick}>
      {prev ? <Icons.ArrowPrev /> : <Icons.ArrowNext />}
    </button>
    <style jsx>{`
      .nav {
        width: 50%;
        margin: 29px auto;
      };
      button {
        background: #FFFFFF;
        border: none;
        width:100%;
        height: auto;
        outline: none;
        cursor: pointer;
      }
      .prev {
        border-right: 1px solid #EAEAEA
      };
    `}</style>
  </div>
)

export default class Showcase extends Component {
  constructor() {
    super()

    this.slider = React.createRef()
    this.slidePrev = this.slidePrev.bind(this)
    this.slideNext = this.slideNext.bind(this)
  }

  slidePrev() {
    this.slider.current.prev()
  }

  slideNext() {
    this.slider.current.next()
  }

  render() {
    return (
      <Page>
        <section>
          <aside>
            <div>
              <Slider className='slider'
                ref={this.slider}
                images={screenshots}
                beforeChange={this.beforeChange}
              />
            </div>
            <div className='figure'>
              <div>
                <h2>Magic Leap</h2>
              </div>
              <div className='external'>
                <a target='_blank' href='https://magicleap.com'>
                  <span>magicleap.com</span>
                  <span className='icon'><Icons.ExternalLink /></span>
                </a>
              </div>
            </div>
            <div className='bottom-nav'>
              <BottomNav prev onClick={this.slidePrev} />
              <BottomNav onClick={this.slideNext} />
            </div>
          </aside>
        </section>
        <style jsx>{`
          section {
            margin: 77px auto 0 auto;
          };
          aside {
            margin: 0 auto;
            text-align: center;
          };
          .figure {
            padding: 54px 0;
            margin: 0 auto;
            text-align: center;
          };
          h2 {
            color: #000000;
            font-size: 32px;
            font-weight: 200;
          };
          .external {
            color: #0000FF;
            font-size: 14px;
            font-weight: 200;
            display: flex;
            justify-content: center;
            align-content: center;
            align-items: center;
          };
          .external a {
            color:inherit;
            text-decoration: none;
          };
          .external .icon {
            position: relative;
            top: 1px;
            left: 10px;
          };
          .bottom-nav {
            display: flex;
            border-top: 1px solid #EAEAEA;
            margin: 0 auto 0 auto;
          };
          @media (min-width: 1000px) {
            section {
              margin: 127px auto 0 auto;
            };
            .bottom-nav {
              display: none;
            };
          };
          @media (min-width: 1280px) {
            section {
              margin: 127px auto 0 auto;
            };
            .bottom-nav {
              display: none;
            };
          };
        `}</style>
      </Page>
    )
  }
}
