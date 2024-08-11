import { useNavigate } from "react-router-dom"


export default function Home() {
    const navigate = useNavigate();
    return(
        <div className="flex flex-col items-center h-dvh justify-between py-14">
            <p className="font-mono font-bold text-3xl">John Ivited You!!</p>
            <div>
            <svg width="236" height="338" viewBox="0 0 236 338" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M156.738 50.4901C161.346 45.0814 164.464 38.4529 163.943 31.0255C162.442 9.62498 132.651 14.3328 126.857 25.1339C121.062 35.9351 121.75 63.333 129.24 65.2635C132.226 66.0333 138.589 64.1475 145.065 60.2443L141 89H165L156.738 50.4901Z" fill="#B28B67"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M174.407 23.9017C175.182 23.1335 175.605 22.0371 175.97 20.9959C176.35 19.9144 176.719 18.8217 176.972 17.696C177.475 15.4468 177.48 12.8602 175.876 11.1136C174.589 9.71309 172.658 9.08491 170.876 8.94839C169.689 8.85734 168.469 9.02361 167.331 9.39775C166.202 9.76891 165.229 10.5086 164.134 10.9678C164.092 8.5439 163.677 6.0077 162.447 3.93808C161.264 1.94677 159.378 0.829322 157.229 0.533691C155.024 0.230298 152.846 0.746335 150.872 1.81393C150.378 2.0813 149.888 2.36141 149.419 2.67844C149.027 2.94392 148.619 3.26363 148.159 3.37159C147.645 3.49209 147.391 3.19567 147.058 2.82123C146.666 2.38221 146.226 1.99553 145.76 1.65273C143.698 0.13726 140.993 -0.485844 138.604 0.422543C137.504 0.841064 136.433 1.55183 135.687 2.53127C135.021 3.40433 134.546 4.78925 133.628 5.39753C133.238 5.65575 132.963 5.31364 132.608 5.0608C132.075 4.68089 131.566 4.26167 131.027 3.89211C130.269 3.37289 129.448 2.98452 128.57 2.78123C127.283 2.4836 125.506 2.55336 125.138 4.23819C125 4.87104 125.106 5.54788 125.15 6.18551C125.211 7.06106 125.275 7.93631 125.351 8.81057C125.409 9.47437 125.482 10.1155 125.607 10.7674C125.674 11.1148 125.883 11.7626 125.734 12.1106C125.548 12.5455 124.689 12.2982 124.321 12.3134C123.596 12.3433 122.868 12.4705 122.197 12.7804C121.678 13.0206 121.131 13.3738 120.912 13.9694C120.777 14.3353 120.813 14.7112 120.876 15.0876C120.953 15.5393 120.865 15.779 120.808 16.2348C119.834 15.7552 116.459 14.6896 116.035 16.4351C115.893 17.0163 116.215 17.673 116.461 18.1632C116.892 19.0229 117.457 19.8087 118.034 20.5581C119.239 22.1214 120.677 23.4698 122.224 24.623C120.411 25.4289 119.938 27.806 121.507 29.2223C122.2 29.8476 123.132 29.9868 124.006 29.9468C124.326 29.9321 124.787 29.8092 125.039 29.8649C125.175 29.8948 125.32 30.0097 125.507 30.0225C126.741 30.107 128.134 29.8098 129.34 29.536C131.488 29.0482 133.523 28.0302 135.184 26.4797C135.61 26.082 135.962 25.853 136.536 25.8589C137.038 25.864 137.532 26.0018 138.034 26.0145C139.362 26.0484 140.56 25.3989 141.794 24.9665C141.87 26.6333 142.345 28.4691 143.026 29.9687C143.582 31.1915 144.743 31.3692 145.884 31.4765C149.533 31.8198 153.194 31.4367 156.848 31.4417C153.311 32.2411 149.657 32.5705 146.152 33.5112C144.568 33.9363 145.778 35.004 146.455 35.7443C147.57 36.9632 148.4 38.4735 148.975 40.0646C150.705 37.8096 153.763 36.3238 156.472 37.0165C159.465 37.7818 161.573 41.8296 159.659 44.7397C158.547 46.429 156.541 47.0811 154.871 47.8069C156.173 49.1612 156.489 51.1614 157.273 52.8462C157.659 53.6771 158.202 54.6165 159.067 54.9061C159.387 55.0132 159.762 55.0224 160.014 55.2832C160.327 55.6061 160.401 55.9671 160.801 56.2446C162.394 57.3523 164.883 57.2669 166.295 55.8214C167.572 54.5141 167.24 52.4454 166.173 51.12C167.871 50.4123 170.964 49.5021 170.289 46.8571C173.968 46.6128 182.9 40.6462 177.963 36.2863C180.673 34.7548 183.162 31.012 181.422 27.7127C180.081 25.1721 176.964 24.0364 174.407 23.9017Z" fill="#191847"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M208.377 214H131.123L121 338H236L208.377 214Z" fill="#C5CFD6"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M208.377 214H184.617L170.396 338H236L208.377 214Z" fill="black" fill-opacity="0.1"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0467 192.756C34.8099 187.81 20.9905 194.165 21 201.238C21.0284 222.403 40.3433 322.151 41.3518 328.457C42.3602 334.762 53.1633 336.428 53.7924 328.477C54.7935 315.827 56.6532 272.033 54.7924 251.763C54.0244 243.395 53.1972 235.427 52.3829 228.318C62.5181 246.621 78.1928 272.826 99.4069 306.934L110.923 301.672C101.88 271.876 94.4642 250.841 88.6766 238.566C78.7668 217.55 69.4747 199.552 65.5639 193.212C59.4124 183.24 48.7045 186.719 43.0467 192.756Z" fill="#B28B67"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M110.1 285.125L70.5726 191.487C61.1033 176.255 34.5539 194.587 37.7831 203.422C45.1145 223.479 82.4003 288.414 84.5845 294.39L110.1 285.125Z" fill="#1F28CF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M112.295 295.767C114.758 297.794 116.359 299.45 117.101 300.734C118.002 302.296 119.058 304.725 120.267 308.021C118.456 309.067 102.174 318.467 71.4219 336.222C67.7298 332.759 67.1545 330.07 69.6961 328.157C72.2377 326.243 74.3351 324.629 75.9883 323.315L92.8478 300.087C93.1722 299.64 93.7975 299.54 94.2445 299.865C94.2521 299.87 94.2597 299.876 94.2672 299.882L97.7703 302.579C100.984 302.299 103.382 301.702 104.965 300.788C106.251 300.045 107.727 298.501 109.393 296.154C110.033 295.253 111.281 295.041 112.182 295.681C112.221 295.708 112.259 295.737 112.295 295.767Z" fill="#E4E4E4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M56.3219 323.402C57.4406 326.388 58 328.623 58 330.106C58 331.909 57.6996 334.54 57.0988 338C55.0068 338 36.2062 338 0.696945 338C-0.768738 333.154 0.0773382 330.539 3.23518 330.152C6.39301 329.766 9.01628 329.417 11.105 329.106L37.32 317.419C37.8244 317.194 38.4157 317.421 38.6405 317.925C38.6444 317.934 38.6481 317.942 38.6517 317.951L40.3368 322.039C43.2601 323.403 45.6356 324.085 47.4633 324.085C48.9483 324.085 50.999 323.485 53.6155 322.285C54.6196 321.825 55.8067 322.266 56.267 323.27C56.2869 323.313 56.3052 323.357 56.3219 323.402Z" fill="#E4E4E4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2296 208.433C18.2296 235 30.8464 296.97 30.8544 302.82L58 302.841C54.0267 247.545 52.6178 219.6 53.7733 219.004C55.5065 218.111 124.824 225.925 145.614 225.925C175.592 225.925 187.994 207.02 189 172H129.614C117.522 173.294 54.4512 186.015 31.0279 190.388C21 192.261 18.2296 201.115 18.2296 208.433Z" fill="#2B44FF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M120.362 109.7L85.6522 90.6898C79.8801 83.8355 74.1931 78.5122 68.591 74.7199C66.8792 74.0052 63.8857 73.5726 66.6852 78.5415C69.4847 83.5104 72.2059 88.8628 70.7797 90.3936C69.3534 91.9244 65.7969 89.7859 64.0955 92.3294C62.9611 94.025 69.0371 96.7036 82.3233 100.365L107.544 123.458L120.362 109.7ZM66 125.74L50.7535 117.364C48.6142 109.224 46.0569 105.128 43.0816 105.077C40.796 104.014 44.7764 114.3 40.4436 113.408C36.1108 112.516 25.5357 104.651 23.7135 106.248C21.0178 108.61 23.4215 115.864 26.2536 119.473C31.5468 126.218 35.9294 128.524 46.7616 131.544C52.4252 133.124 58.5486 136.289 65.1318 141.04L66 125.74Z" fill="#997659"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M137.266 105.465C125.108 105.337 108.896 102.769 91.5976 91.7887L84.8041 106.939C96.7362 118.78 113.514 128.51 128.184 128.098C139.745 127.773 145.653 113.789 137.266 105.465Z" fill="#2026A2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M120.896 129.761C107.989 132.98 86.345 129.184 55.9641 118.373C48.4283 133.964 44.9447 145.078 45.5133 151.717C71.5757 165.331 93.9135 171.401 112.317 171.802C111.732 182.721 113.061 193.112 117.526 202.606C126.705 222.124 180.455 204.048 198.527 207.606C209.845 170.851 187.962 155.914 187.944 132.397C187.925 106.642 167.246 67 164.203 67H136.456C134.925 86.669 127.22 108.346 120.896 129.761Z" fill="#1F28CF"/>
            </svg>

            </div>
            <button onClick={()=>navigate("/poll")} className="px-5 py-3 font-mono text-lg bg-lime-600 text-white rounded-lg">
                Take Poll
            </button>

        </div>
    )
}