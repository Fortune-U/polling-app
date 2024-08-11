


export default function Result ({storedAnswers}) {

    

    return(
        <div className="flex flex-col items-center gap-6">
            <span className="flex flex-col items-center">
            <p className="font-bold text-3xl text-center    ">You've successfully Completed this poll!!</p>
            <svg width="286" height="286" viewBox="0 0 286 286" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_602_211"  maskUnits="userSpaceOnUse" x="0" y="0" width="286" height="286">
            <path d="M286 0H0V286H286V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_602_211)">
            <path d="M286 0H0V286H286V0Z" fill="white"/>
            <path d="M134.477 174.403C136.794 175.318 138.338 177.52 138.338 180.008V180.323C138.338 183.641 136.536 186.644 133.705 188.36C130.788 190.133 128.671 192.707 127.87 195.681H158.043C157.243 192.707 155.126 190.133 152.209 188.36C149.378 186.644 147.576 183.641 147.576 180.323V180.008C147.576 177.52 149.12 175.318 151.437 174.403C162.305 170.141 170.685 157.958 172.887 142.771H113.027C115.258 157.958 123.609 170.141 134.477 174.403Z" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M165.337 141.599L160.532 139.025L181.21 100.157C181.925 98.8416 183.555 98.3268 184.899 99.0418C186.215 99.7568 186.729 101.387 186.014 102.731L165.337 141.599Z" fill="#F37443"/>
            <path d="M168.397 135.736L160.989 137.995" stroke="#F04B4B" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M171.457 129.958L164.05 132.218" stroke="#F04B4B" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M174.546 124.21L167.138 126.469" stroke="#F04B4B" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M177.606 118.433L170.199 120.692" stroke="#F04B4B" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M180.666 112.655L173.259 114.915" stroke="#F04B4B" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M183.755 106.878L176.348 109.138" stroke="#F04B4B" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M170.399 131.446L162.991 133.705" stroke="#FFFDEB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M173.459 125.668L166.052 127.928" stroke="#FFFDEB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M176.548 119.92L169.14 122.179" stroke="#FFFDEB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M179.608 114.143L172.201 116.402" stroke="#FFFDEB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M182.668 108.365L175.261 110.625" stroke="#FFFDEB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M185.757 102.588L178.35 104.848" stroke="#FFFDEB" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M165.337 141.599L160.532 139.025L181.21 100.157C181.925 98.8416 183.555 98.3268 184.899 99.0418C186.215 99.7568 186.729 101.387 186.014 102.731L165.337 141.599Z" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M169.741 133.276L162.333 135.535" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M172.83 127.527L165.422 129.787" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M175.89 121.75L168.483 124.01" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M178.979 115.973L171.571 118.232" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M182.039 110.196L174.631 112.484" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M185.099 104.447L177.692 106.707" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M115.058 134.878C115.029 134.22 115.001 133.533 115.001 132.876C115.001 124.095 118.089 115.859 123.724 109.71C128.986 103.961 135.85 100.786 143 100.786C150.15 100.786 157.014 103.961 162.276 109.71C167.911 115.859 170.999 124.067 170.999 132.876C170.999 133.533 170.971 134.22 170.942 134.878H115.058Z" fill="#FFFDFD"/>
            <path d="M115.058 134.878C115.029 134.22 115.001 133.533 115.001 132.876C115.001 124.095 118.089 115.859 123.724 109.71C128.986 103.961 135.85 100.786 143 100.786C150.15 100.786 157.014 103.961 162.276 109.71C167.911 115.859 170.999 124.067 170.999 132.876C170.999 133.533 170.971 134.22 170.942 134.878H115.058Z" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M115.058 134.878C115.029 134.22 115.001 133.533 115.001 132.876C115.001 124.095 118.089 115.859 123.724 109.71C128.986 103.961 135.85 100.786 143 100.786C150.15 100.786 157.014 103.961 162.276 109.71C167.911 115.859 170.999 124.067 170.999 132.876C170.999 133.533 170.971 134.22 170.942 134.878H115.058Z" fill="#F37443"/>
            <path d="M162.276 109.71C157.014 103.961 150.15 100.815 143 100.815C142.371 100.815 141.77 100.844 141.141 100.901C147.633 101.387 153.754 104.504 158.558 109.738C164.193 115.887 167.281 124.095 167.281 132.904C167.281 133.562 167.253 134.248 167.224 134.906H170.914C170.942 134.248 170.971 133.562 170.971 132.904C170.999 124.095 167.911 115.859 162.276 109.71Z" fill="#EE562B"/>
            <path d="M162.477 109.71C157.214 103.961 150.35 100.786 143.2 100.786C136.05 100.786 129.186 103.961 123.924 109.71C120.52 113.428 118.061 117.889 116.631 122.808C118.804 123.952 121.235 124.582 123.838 124.582C127.413 124.582 130.702 123.38 133.362 121.35C134.449 120.52 135.993 120.52 137.08 121.35C139.74 123.38 143.029 124.582 146.604 124.582C150.608 124.582 154.297 123.066 157.071 120.549C158.358 119.405 160.332 119.434 161.504 120.721C163.821 123.323 166.967 125.125 170.513 125.754C169.312 119.691 166.566 114.171 162.477 109.71Z" fill="#C5342F"/>
            <path d="M162.276 109.71C157.043 103.99 150.236 100.815 143.114 100.786C142.485 100.786 141.856 100.815 141.255 100.872C147.69 101.387 153.811 104.476 158.587 109.71C162.334 113.799 164.965 118.833 166.309 124.353C167.567 124.982 168.883 125.411 170.313 125.697C169.083 119.662 166.338 114.143 162.276 109.71Z" fill="#C22B24"/>
            <path d="M132.332 109.71C136.536 105.134 141.742 102.188 147.29 101.187C145.889 100.929 144.43 100.786 143 100.786C135.85 100.786 128.986 103.961 123.724 109.71C118.089 115.859 115.001 124.067 115.001 132.876C115.001 133.533 115.029 134.22 115.058 134.878H123.666C123.638 134.22 123.609 133.533 123.609 132.876C123.609 124.095 126.698 115.859 132.332 109.71Z" fill="#F06134"/>
            <path d="M143.086 100.815C135.964 100.844 129.186 104.018 123.952 109.738C120.549 113.456 118.089 117.918 116.659 122.837C118.833 123.981 121.264 124.61 123.867 124.61C124.095 124.61 124.353 124.61 124.582 124.582C125.897 119.005 128.557 113.885 132.361 109.738C136.565 105.162 141.77 102.216 147.318 101.215C145.917 100.929 144.516 100.815 143.086 100.815Z" fill="#C22B24"/>
            <path d="M115.058 134.878C115.029 134.22 115.001 133.533 115.001 132.876C115.001 124.095 118.089 115.859 123.724 109.71C128.986 103.961 135.85 100.786 143 100.786C150.15 100.786 157.014 103.961 162.276 109.71C167.911 115.859 170.999 124.067 170.999 132.876C170.999 133.533 170.971 134.22 170.942 134.878H115.058Z" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M109.395 134.363C109.395 134.706 109.395 134.563 109.395 134.649C109.395 137.394 109.595 140.14 109.938 142.771H176.061C176.405 140.169 176.605 137.423 176.605 134.649C176.605 134.563 176.605 134.706 176.605 134.363H109.395Z" fill="#F99F38"/>
            <path d="M169.112 134.363H175.747C175.747 134.706 175.747 134.563 175.747 134.649C175.747 137.394 175.604 140.14 175.375 142.771H169.14V134.363H169.112Z" fill="#F67D20"/>
            <path d="M118.89 134.363H109.395C109.395 134.706 109.395 134.563 109.395 134.649C109.395 137.394 109.595 140.14 109.938 142.771H118.89V134.363Z" fill="#F67D20"/>
            <path opacity="0.4" d="M142.886 107.221C146.771 107.221 149.921 106.133 149.921 104.79C149.921 103.448 146.771 102.359 142.886 102.359C139 102.359 135.85 103.448 135.85 104.79C135.85 106.133 139 107.221 142.886 107.221Z" fill="#931C1C"/>
            <path d="M162.477 109.71C157.214 103.961 150.35 100.786 143.2 100.786C136.05 100.786 129.186 103.961 123.924 109.71C120.52 113.428 118.061 117.889 116.631 122.808C118.804 123.952 121.235 124.582 123.838 124.582C127.413 124.582 130.702 123.38 133.362 121.35C134.449 120.52 135.993 120.52 137.08 121.35C139.74 123.38 143.029 124.582 146.604 124.582C150.608 124.582 154.297 123.066 157.071 120.549C158.358 119.405 160.332 119.434 161.504 120.721C163.821 123.323 166.967 125.125 170.513 125.754C169.312 119.691 166.566 114.171 162.477 109.71Z" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M134.477 174.403C136.794 175.318 138.338 177.52 138.338 180.008V180.323C138.338 183.641 136.536 186.644 133.705 188.36C130.788 190.133 128.671 192.707 127.87 195.681H158.043C157.243 192.707 155.126 190.133 152.209 188.36C149.378 186.644 147.576 183.641 147.576 180.323V180.008C147.576 177.52 149.12 175.318 151.437 174.403C162.305 170.141 170.685 157.958 172.887 142.771H113.027C115.258 157.958 123.609 170.141 134.477 174.403Z" fill="#F99F38"/>
            <path d="M151.523 174.403C162.391 170.141 170.77 157.958 172.973 142.771H161.847C160.56 150.836 155.241 156.871 148.891 156.871C142.542 156.871 137.223 150.836 135.936 142.771H113.027C115.258 157.958 123.609 170.141 134.477 174.403C136.794 175.318 138.338 177.52 138.338 180.008V180.323C138.338 183.641 136.536 186.644 133.705 188.36C130.788 190.133 128.671 192.707 127.87 195.681H158.043C157.243 192.707 155.126 190.133 152.209 188.36C149.378 186.644 147.576 183.641 147.576 180.323V180.008C147.662 177.52 149.206 175.289 151.523 174.403Z" fill="#F7932F"/>
            <path d="M151.523 174.403C162.391 170.141 170.771 157.958 172.973 142.771H169.083C167.653 159.273 157.901 169.512 146.203 170.456C137.452 171.171 124.725 159.245 123.323 142.771H113.084C115.315 157.958 123.666 170.141 134.534 174.403C136.851 175.318 138.395 177.52 138.395 180.008V180.323C138.395 183.641 136.594 186.644 133.762 188.36C130.845 190.133 128.729 192.707 127.928 195.681H137.623C138.824 192.078 141.913 190.419 145.202 190.419C148.491 190.419 152.753 192.078 153.954 195.681H158.101C157.3 192.707 155.184 190.133 152.266 188.36C149.435 186.644 147.633 183.641 147.633 180.323V180.008C147.662 177.52 149.206 175.289 151.523 174.403Z" fill="#F67D20"/>
            <path opacity="0.3" d="M172.973 142.771H113.027V146.718H172.973V142.771Z" fill="#D8542B"/>
            <path d="M134.477 174.403C136.794 175.318 138.338 177.52 138.338 180.008V180.323C138.338 183.641 136.536 186.644 133.705 188.36C130.788 190.133 128.671 192.707 127.87 195.681H158.043C157.243 192.707 155.126 190.133 152.209 188.36C149.378 186.644 147.576 183.641 147.576 180.323V180.008C147.576 177.52 149.12 175.318 151.437 174.403C162.305 170.141 170.685 157.958 172.887 142.771H113.027C115.258 157.958 123.609 170.141 134.477 174.403Z" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M143.629 105.019C147.088 105.019 149.893 102.138 149.893 98.5842C149.893 95.0304 147.088 92.1492 143.629 92.1492C140.17 92.1492 137.366 95.0304 137.366 98.5842C137.366 102.138 140.17 105.019 143.629 105.019Z" fill="#EE202E"/>
            <path d="M143.629 105.019C147.088 105.019 149.893 102.138 149.893 98.5842C149.893 95.0304 147.088 92.1492 143.629 92.1492C140.17 92.1492 137.366 95.0304 137.366 98.5842C137.366 102.138 140.17 105.019 143.629 105.019Z" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M144.201 94.952L149.378 88.0022" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M145.202 96.7252C144.859 97.1256 144.373 97.3544 143.829 97.3544C143.143 97.3544 142.571 96.954 142.199 96.382" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M133.476 92.9214L135.85 93.4934" stroke="#622F2F" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M135.135 89.375L136.937 90.9194" stroke="#622F2F" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M138.052 87.3444L138.739 89.5466" stroke="#622F2F" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <g opacity="0.6">
            <path opacity="0.6" d="M68.0966 127.928H70.9566" stroke="#DF5E4C" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.6" d="M69.5266 126.498V129.358" stroke="#DF5E4C" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <path d="M204.204 137.995H207.064" stroke="#F7931E" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M205.634 136.565V139.425" stroke="#F7931E" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M188.503 150.35H192.764" stroke="#DF5E4C" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M190.648 148.234V152.495" stroke="#DF5E4C" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M85.6855 164.336H88.5455" stroke="#622F2F" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M87.1156 162.906V165.766" stroke="#622F2F" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <g opacity="0.3">
            <path opacity="0.3" d="M170.771 169.226H173.631" stroke="#622F2F" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.3" d="M172.201 167.796V170.656" stroke="#622F2F" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <path d="M88.7744 141.427H93.3218" stroke="#F7931E" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M91.0624 139.168V143.715" stroke="#F7931E" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.6" d="M194.194 167.196C194.984 167.196 195.624 166.555 195.624 165.766C195.624 164.976 194.984 164.336 194.194 164.336C193.404 164.336 192.764 164.976 192.764 165.766C192.764 166.555 193.404 167.196 194.194 167.196Z" stroke="#622F2F" stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.7" d="M101.215 99.0132C101.974 99.0132 102.588 98.3986 102.588 97.6404C102.588 96.8822 101.974 96.2676 101.215 96.2676C100.457 96.2676 99.8425 96.8822 99.8425 97.6404C99.8425 98.3986 100.457 99.0132 101.215 99.0132Z" stroke="#F7931E" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.3" d="M98.2696 154.268C99.391 154.268 100.3 153.359 100.3 152.238C100.3 151.116 99.391 150.207 98.2696 150.207C97.1482 150.207 96.239 151.116 96.239 152.238C96.239 153.359 97.1482 154.268 98.2696 154.268Z" stroke="#F7931E" stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M216.817 143.715C217.338 143.715 217.76 143.292 217.76 142.771C217.76 142.25 217.338 141.827 216.817 141.827C216.295 141.827 215.873 142.25 215.873 142.771C215.873 143.292 216.295 143.715 216.817 143.715Z" stroke="#F7931E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M118.89 176.147C119.411 176.147 119.834 175.725 119.834 175.204C119.834 174.682 119.411 174.26 118.89 174.26C118.369 174.26 117.946 174.682 117.946 175.204C117.946 175.725 118.369 176.147 118.89 176.147Z" stroke="#F7931E" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M109.395 134.363C109.395 134.706 109.395 134.563 109.395 134.649C109.395 137.394 109.595 140.14 109.938 142.771H176.061C176.405 140.169 176.605 137.423 176.605 134.649C176.605 134.563 176.605 134.706 176.605 134.363H109.395Z" stroke="#622F2F" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <g opacity="0.15">
            <path opacity="0.15" d="M96.239 195.681H194.194" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M162.18 82.1054V52.247H121.368V82.1054H162.18Z" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M158.215 56.2276H125.354V78.1352H158.215V56.2276Z" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M131.274 73.7594L136.479 64.7218L141.684 73.7594H131.274Z" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M139.082 69.2406L142.542 63.2346L148.634 73.7594H141.684" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M150.951 64.7218C152.23 64.7218 153.267 63.6848 153.267 62.4052C153.267 61.1259 152.23 60.0886 150.951 60.0886C149.672 60.0886 148.634 61.1259 148.634 62.4052C148.634 63.6848 149.672 64.7218 150.951 64.7218Z" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M233.776 90.1186H211.068V101.187H233.776" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M188.388 101.187H211.068" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M211.068 90.1186H202.402" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M199.734 112.259H222.413V101.191H199.734V112.259Z" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M230.23 112.312H211.068V123.38H218.418" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.15" d="M188.394 123.365H211.074V112.297H188.394V123.365Z" stroke="#262626" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            </g>
            </svg>


            <p className="font-semibold text-lg">Here are your picks</p>
            </span>
            <div>
                <ul>
        {storedAnswers.map((entry, index) => (
          <li key={index} className="flex flex-col items-center gap-2">
            <strong>Question:</strong> {entry.question} <br />
            <strong>Answer:</strong> {entry.answer}
          </li>
        ))}
      </ul>
            </div>
        </div>
    )
}