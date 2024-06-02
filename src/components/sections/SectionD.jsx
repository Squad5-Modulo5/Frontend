import './sectionD.css'
import eletric_pokemon from "../../assets/pokemons/eletric_pokemon_(5).png"



function SectionD(props) {

    return (
        <>
         <div id="found-color">
             <div id="sectionD">
                <br></br>
                <img id="arrow-white" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACQCAYAAAD9egI2AAAAAXNSR0IA
                rs4c6QAAEAJJREFUeF7tnX2UXVV1wPd+93vPzBuIijpVZPlFF7VdFZYrtS1YqnwKCKSIxUShQiBLC0opUkKhoK1t
                FaM1ElQ+/MIAKpjyUb4kC1BAbdF2uaJtpdBYJxDIzHszb867X+/u5pibtXBMZs59mXffPe+d809Wkr3P2Wfv39y55
                2Pvi2Ca8UCJHsASxzJDGQ+AAc5AUKoHDHClutsMZoAzDJTqAQNcqe42gxngDAOlesAAV6q7zWAGOMNAqR4wwJXqb
                jOYAc4wUKoHDHClutsMZoAzDJTqAQNcqe42gxngDAOlesAAV6q7zWAGOMNAqR4wwJXqbjOYAc4wUKoHDHClutsMZ
                oAzDJTqAQNcqe42gxngDAOlesAAV6q7zWAGOMNAqR4wwJXqbjOYAc4wUKoHDHClutsMZoAzDJTqAQNcqe42gxngD
                AOlesAAV8DdzHwogHgGcWSygJoRfYEHDHAKODBzAABrOEuvSJJ0G9as013X/XcFVSMyzwMGuEWQEEK8MvDd9aIdn
                bRbtB0l0fiYf4Jte5sRsWOoUveAAW4BX83MzPxmHHceDgL3JXsSI6I/AYB/QUSh7vLhljTA7SX+zzeby9MwuWdsN
                NhvIUSI6J0AcDcizg03SmqzN8DtwU9CiFPn2tHN5LuOihuJaAOE4d9jEGxVkR9mGQPcvOjHcfucJMk+XxQK37W3p
                Fl8mueNbSmqO0zyBrg82szspnF4YZxmH+sWgDhOtzHXjl62bOzH3fYx6HoGOACYnZ09gHxvbRgn5+9rwKM4adtW7
                ah6vf7dfe1rEPWHHrjZ2dlDfNe9Pk7T31vKAJPnnQiWdR8ixkvZr+59DTVwjUbj0AzgLs9xXtaLQBLRuwHgNkQMe
                9G/jn0OLXCNRuOP0wzuDjzH62XgiOgigNkvIdaf7+U4uvQ9lMAJId7JzLcUCRIR/XMYhh/0ff/4KAzXdbJMactEj
                uE59vdEGJ1Zr9d/WmTMQZQdKuCY2YYsWS3C5LNFgklEnwSAy3dv7jJ31sRR/Km0k7mq/XQ6nV8g4tFjY8O9bTI0w
                DEzZWl8aRina1UhCTxnBi1HwvbR+WemzOkqAOsfhBAvV+0vjuNtAO7b999/5IeqOoMmNxTAyW2PkcC/rh3FJ6oGk
                IjkqcE/AsAGRMz2pJck7SNs218nhDhUtd92GMcj5B8XBMGDqjqDJDfwwDWbzdci4mbLsl6hGjgi+g8AWIeIX1xMh
                5knAPgOIdrK0Mk+ieh0ANiEiNFiYwzS/w80cI1G4zARJg+Oj1FdNWhE9GinA+tsG7+hqsPMcltloxDij1R1cujeB
                QB3DNNtk4EFbm5u7vjZufCusRFfmQEi+mqSJJ90XbfwOxYzjwDAVUKIC5UH3PWk2wAwdxXi6DNF9HSVHUjg0jReF
                UXJl4sEJV+JfgQRG0X05ssyd84L29H6jNkq0M/TlmW9zff9JwvoaCk6UMDxriCfL4SQK0ulVqth6vvBFQCwHhFnl
                JQWEWLmVVkaXxvGKan2l6adSUQ4sl6v/5eqjo5yAwMcM48BwIeEEFeqBsL3nJma5VwCAJ/b20pUta9fe9IlydvAr
                l0rRPga1T7kwb/vuUcS0fdUdXSTGwjg2u32gb5jf0VE8RGqASCinwHAxYh4u6pOUTlm8UqA4OtCiOVFdIncYxCd+
                4ro6CKrPXDNZvN1UdJ5bCTwXqTqdCKSi4LLEPFuVZ1u5ZhZrpBvEUIcW6SPPF9CbpukRfSqLqs1cHNzc4dFcfKI5
                zoyjU+pEdHXAeATiPh9JYUlEGLmGgB8TQgh996UGxGdCQA3DRJ02gLHnJ7QbkebmEEGU6kR0acA4Mp9XYkqDbYHI
                WZe3W6LDUVsDjz3EUzSlYOSL6ElcMx8phDiRtXAy3PQIAguy59sff0VxczvarfFTUWgQ4SnajXrqEHYNtEKuPxX0
                6VCiI+owuY59pzluB9CxC+o6vRajpmPAchuEiJUfu+cbbUbFLjLdd820Qa4fNtjgxBC3qJVakT0PwDwfkS8R0mhR
                CFmfi0AXC+EUF5ZAwC7lnW04/sPlGjqkg6lBXBCiN9AgIcz5lerzp6IZO2PsxHxX1V1ypbLV7C3CSHeWmTsnZcLT
                gWAu3TMl6g8cGE4c3A74gdd255QDQoR3Znvsf1EVadfcsw8CgDXFnlyS1tz6O5BxHa/bO9m3EoDx0ny5h0zrYcCx
                Qz4PBDXA8BF/VqJdhMEqcPMV7Tb4nLVxQQFbgPQfncZe4ndzmlPepUFjplXCCGUrwjlsMnD98uX0kFl9sXMp+ZzX
                jQuRMFkmuL7HKd676cL+WzRiZXp8N1jMfPZO9/blFeVtlULXc+/ABELl2jox/wWGpOZj4MsvVmE8V7v8OVX309BR
                O1uDVcKOGaWKXvnCiE+rQoC+e401Oz3IuIdqjrdyDHzSwHgFACQtzm+08sXdmZ+AwB8Qwhx8HxbXduazACP8zxP3
                krWrlUGOGaWNdg+LoR4r6oXieg/AeAsRHxMVacbOd61Ov7LKArP8jxflls9GwAe6+ULe76Y+IoQ4uTdNjtW7acZ4
                Im+78uLB1q2SgDHzK8CAOncw1W9SESydsf5iPiEqk43csz8ZgC4Wggh//xl8z2nVbOc9wDAw4i4o5t+VXTy+32f5
                05yGlr2ZoC5cxDHtqvoVlWm78Dl9XNvEELI+/1KjYhkcotM3evpDdnF3qeI6JoognW+jz194jDzGwFgyyAk3PQdO
                EkYM79HCPElFdqISKbuyatFiYp8tzJylRxH4ca0s3CGPRHdGkVwme/jf3c71jDpVQW40enp5hWe51y0gPOZiGT2+
                0d7HSBm/oAQ4jOq4xDRQ/mvdy1f5FXnuRRylQBOTqTZbC5rR53VgPyxMfrVTCvPsVv5Afx1SzHpvfWRn9euF0LI9
                7NCjYjkYuKMfAVrKpvvxXuVAW63fVsnnz3Zs+0bRkf8/eW/EZFcgV6CiA8XIqCgcL5K/maRhcv8IQLfncGaLbdOH
                jLl9PccgMoBJ83c9tz0W1724v0+DADyqSGzqX5UkJ9C4szhwcD2vaIdydXyPjXHtkLH9eQ3Hb691Ik5+2RYRZQrC
                Zz0jSw+s3M7YgwRn+2lr5j5D/NNVrmxu2SNiP42zwb7+ZJ1OgAdVRa4MnzLzKckcbQxSTs9KUpIRLIG3V8g4i/Km
                I8OYwwtcMx8hhDipiJBmtzegIkDFvxOyK91JwsZ5rdXzLbJzoSSoQNOlscHgA8LIa4qAhsA3Nhqtf4K0TksIGdjD
                WtFCuTIy6Cry8wUKzi30sSHCrj8VEMeoa1Q9bBt1eKahWsdx//Ebp2pqdk3MHYe8F1H+b2PKNgOgKf1erWtOq9+y
                Q0NcMx8AADILHjlHAK54gSECxzH+wIi8guDNDU19duMtfuLQOe5trBs9yRE/Ha/At7vcYcCOGY+BABuFUL8lqrDP
                deeTNJsZRAEm/emMz09/SqsWdc4tnW8ar/yiel6/p/JlfEgnI2qznu33MADx8x/ANC5U4hI+W3fdawtGePpnuct+
                gmjnzMHI83m33iOc3ER5xORvM28BhGHqpz+QAPHzEd10vj2KE5lsUClRoH7BLTjE3FE/TPj8uJoq9VaW6vV/lppk
                FwoT/aR9/mGBrqBBY6ZVyZxdF2RPTYifyNA7Zxuvn0qk7R3NGY+wFl2NfmurQoeEf0AAP6011etVO3ptdzAAffLb
                zEAXCmEuLSI84j8CxGtdUV09iT73HPTb0mzzqb6aDCu2hcR/S8AvAMR5fbJQLeBAo6Z5ddhviq/NKMatV0VMO1zE
                d0bVHUWk9uxY8chYZw9vl+dZJFEpeZ7zmzNcmRizECvYAcGOGaWt0u+VWTbo4b4vB84KxCdJb+J8myj8RpIsvtGy
                VOuFuA6dtt23JMRcSCLEcqfvIEALt/22CSEkPU6lBqR9yRAdASi+uJAqeMXCD31FPv18eanfc9ZXUSXiK7ObzUP3
                FcItQdObntwlt7dXiCPc36wiYJHAfAYRGwVAaEbWWbGMAwvybLs74royxL+APDnulUQWGyOWgPHzMcKIWTZVOV5E
                AV35kdMpT095Ao2iaKzk07nc4sF5IX/T0RybqsQcaqIXpVllQNVtUkw85p2W6xXrcUh7Sci+cRY36+5tFqt343T9
                FHPKVQi9hGZHI6IlS/Mo+JX7YDLczVl3sF5KhOUMvm3GFYgorwq1Ncmj8PilJ8YJW+ZqiFEJC+hvh0R/01Vp6pyW
                gGXZ6PLooQrVR2abzecUKVbGo1G49Wu49zPAEVXsG/tdZUBVb92K6cNcN1UjCTfeRpqzuGI+H/dOqhXelNTU+Pj9
                dF/CqOkSIaYTJWUT/Ybe52X26t5awEcMx8GkN1bpCZunisqfw3N9cp5+9rvrprFyblCJNcU6YuIZLrkWkTUruxD5
                YFj5uVZJ3kgjBJZKVKp5bkE8lBci+qQzPGaLqD7Wn51fZuSUyoiVGngZG2PKAo3dRYptzBvK0FmzH9QtxS9MJw7P
                ow7tziWVeQHS9YwlhU/tWmVBC4vj39Bka8CIkIWBHRelcrjF6Wg2Wy+SbST++tjix/8h1E8CVZtxYvGxx8vOk4/5
                SsHHDPLOg/XCCHOUnVMDbHjB8FKRLxZVaeqcvLgH6C22fddeSV+j23HdOtZj5yjX7psmXa1TCoFHDO/OL/tcYwqE
                FYNt3u+fRKiOzCffJyamjowz5d4/Xw/TG5vbB3xgsMnJpZtVfVRleQqAxwzvw4Abi+Sd0DkPQ5gydsVPc3O70fA5
                NX1+szMx23bfv/u8Ruz4lbMkrMmJiZEP2xaijErARwz/74si7CzgresbavU8gTjM6q87aE0kQWE5LtslkTn1xzv4
                jAMb/B9X1Zpj/a1337q9x04Zj4IAGQFzCNVHZHvQ8kFwlCUxWLmAxFRy1+h82Pad+CkQc1W69jnnp+56+UvGV/wU
                5T5VwHPBYAvDgtsqj+EushVAjjprC0/23qyY1m37612h+/arZrtysz1yn2oTZdgV8HOygAnnfGjLU+fknF228EH/
                WoFhZ3nh8/IbyQgolZ7TlUIcNVsqBRw0jk//PGTbwqT9DO/8/pXLJd/J6J7868CVu4AvmrB1MGeygEnnfaTp7YdN
                LFsdFW9Pipvun4ZEWd1cKaxcXEPVBK4xc02Erp6wACna+Q0tdsAp2ngdDXbAKdr5DS12wCnaeB0NdsAp2vkNLXbA
                Kdp4HQ12wCna+Q0tdsAp2ngdDXbAKdr5DS12wCnaeB0NdsAp2vkNLXbAKdp4HQ12wCna+Q0tdsAp2ngdDXbAKdr5
                DS12wCnaeB0NdsAp2vkNLXbAKdp4HQ12wCna+Q0tdsAp2ngdDXbAKdr5DS12wCnaeB0NdsAp2vkNLXbAKdp4HQ12
                wCna+Q0tdsAp2ngdDXbAKdr5DS12wCnaeB0NdsAp2vkNLXbAKdp4HQ12wCna+Q0tdsAp2ngdDXbAKdr5DS12wCna
                eB0NdsAp2vkNLX7/wHNlE3cG8gUiwAAAABJRU5ErkJggg==" alt='arrow-up-image'>{props.arrow}</img> 


            <div className='textos'>
                    <h1 className='titulo2'>{props.title}Calcule o consumo de energia da sua casa</h1>
                    <p className='prg1'>{props.text}Descubra quanto sua casa consome de energia e <br></br> identifique áreas onde você
                    pode economizar <br></br> dinheiro. Use nossa calculadora de consumo de <br></br> energia gratuita para obter uma 
                    análise <br></br> personalizada do uso de energia da sua casa. <br></br> Basta inserir algumas informações básicas e nós
                    <br></br> faremos o resto. Com essas informações valiosas, <br></br> você pode tomar decisões informadas e <br></br>
                    implementar mudanças simples para reduzir seu <br></br> consumo de energia e economizar dinheiro.</p>
                    <p className='prg2'>{props.text} Clique no botão abaixo para acessar a <br></br> calculadora agora mesmo!</p> 
                    <button id='calculator2'>{props.calculator}CALCULADORA</button>
                    <img id='eletric-pokemon-5' src={eletric_pokemon} alt='eletric-pokemon-5'>{props.pokemon}</img> 
            </div>


             </div>
         </div>

        </>
);}



export default SectionD
