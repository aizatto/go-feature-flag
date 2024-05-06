import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import chapatiSystems from '@site/static/img/using-it/chapati.systems.png';
import lyft from '@site/static/img/using-it/lyft.png';
import castailogo from '@site/static/img/using-it/cast.ai-logo.svg';

export function UsingIt() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <section className={styles.usingit}>
      <div className="grid grid-pad">
        <div className={clsx('col-1-1')}>
          <span className={clsx(styles.mainTitle)}>
            Who is using GO Feature Flag?
          </span>
          <div className={clsx('grid grid-pad', styles.logo)}>
            <div className={'col-1-5 mobile-col-1-1'}>
              <div className="content"></div>
            </div>
            <div className={'col-1-5 mobile-col-1-1'}>
              <div className="content">
                <Link to={"https://agentero.com"}>
                  <svg viewBox="0 0 154 44" width="190" height="70" fill="none" xmlns="http://www.w3.org/2000/svg" className="Logo_logo__csB_s"
                       role="img" aria-label="Agentero">
                    <g clip-path="url(#logo-agentero_svg__a)" fill="#2DBC90">
                      <path
                        d="M34.056 44a17.76 17.76 0 0 1-5.866-.885 12.342 12.342 0 0 1-4.28-2.518c-2.174-1.94-3.839-4.707-5.413-8.973l-2.729-7.662-4.79-13.612-.515-1.457-.51 1.457L5.56 22.782l10.123 2.502.159.34H0L6.641 8.303A3.6 3.6 0 0 1 9.987 6h1.003a3.766 3.766 0 0 1 3.533 2.461l8.39 22.494c3.131 7.266 6.613 8.854 11.222 9.075h.402c3.46 0 5.628-2.121 5.73-4.175a2.887 2.887 0 0 0-.974-2.32 5.798 5.798 0 0 0-3.397-1.292c-2.078-.205-4.666-.46-6.562-1.135-2.095-.72-3.103-1.854-3.103-3.476a2.84 2.84 0 0 1 .736-2.054 4.606 4.606 0 0 1 2.265-1.134 5.264 5.264 0 0 1-2.361-2.268 6.054 6.054 0 0 1-.657-2.808c0-2.37.6-4.027 1.891-5.2 1.568-1.43 4.173-2.128 7.927-2.128h8.826v2.938l-2.83-.102a3.718 3.718 0 0 1 1.568 1.628c.447.9.67 1.894.65 2.898 0 2.37-.565 3.97-1.754 5.105-1.427 1.332-3.828 1.979-7.36 1.979-1.314 0-3.149-.08-3.166-.08-1.664.21-2.004.517-2.004.908 0 .89 1.45 1.083 5.317 1.594l.736.096c4.104.533 8.39 1.622 9.058 5.711.12.878.023 1.772-.283 2.604a8.68 8.68 0 0 1-1.596 2.756 10.721 10.721 0 0 1-3.613 2.79A13.116 13.116 0 0 1 34.056 44Zm1.132-28.494c-4.144 0-4.7 1.888-4.7 3.743 0 1.356.29 2.269.9 2.932.748.783 2.005 1.134 3.84 1.134 1.834 0 3.034-.368 3.776-1.134.629-.646.928-1.588.928-2.966-.01-1.911-.588-3.71-4.75-3.71h.006ZM78.97 11.944c-4.365 0-6.397 1.826-7.037 3.284l-.029-2.99h-3.051v21.258h4.025V21.66c0-3.822.867-6.023 4.966-6.023s4.705 2.269 4.705 6.023v11.837h3.991V22.04c0-6.023-1.245-10.095-7.57-10.095ZM93.651 7.934h-4.195v5.07h-2.904v3.403h2.904v11.055c0 4.792 2.83 6.375 9.54 5.978v-3.403c-4.41.198-5.209-.675-5.209-2.575V16.407h5.21v-3.402h-5.329l-.017-5.07ZM126.218 15.182V12.24h-3.041v21.257h3.964V21.7c0-3.448.781-5.898 4.756-5.898.334 0 .707.085 1.081.085v-3.97h-.628c-3.72 0-5.538 1.826-6.132 3.238M143.243 33.496a10.746 10.746 0 0 1-6.817-2.458 10.792 10.792 0 0 1-2.642-13.409 10.763 10.763 0 0 1 5.373-4.868 10.741 10.741 0 0 1 13.054 3.974 10.786 10.786 0 0 1-4.838 15.944c-1.309.542-2.713.82-4.13.817Zm0-17.582c-1.344 0-2.658.4-3.775 1.147a6.803 6.803 0 0 0-2.502 3.054 6.82 6.82 0 0 0-.387 3.933 6.803 6.803 0 0 0 5.338 5.347 6.784 6.784 0 0 0 6.975-2.894 6.819 6.819 0 0 0-.845-8.594 6.787 6.787 0 0 0-4.804-1.993ZM56.986 33.496a14.987 14.987 0 0 1-5.464-.902 8.296 8.296 0 0 1-3.397-2.405 9.08 9.08 0 0 1-1.698-3.454 15.672 15.672 0 0 1-.482-4.06 15.411 15.411 0 0 1 .487-4.044 8.968 8.968 0 0 1 1.733-3.403 8.284 8.284 0 0 1 3.357-2.422 14.967 14.967 0 0 1 5.441-.89c3.244 0 5.741.935 7.434 2.779 1.959 2.138 2.83 5.501 2.446 9.72H50.684c.272 3.784 2.333 5.672 6.126 5.672 2.961 0 4.682-1.1 5.266-3.363h4.83a6.668 6.668 0 0 1-2.503 4.696c-1.699 1.395-4.196 2.076-7.417 2.076Zm-.476-18.15c-3.674 0-5.514 1.782-5.78 5.616h11.323v-.068c0-.034 0 0 0 0a5.626 5.626 0 0 0-1.404-4.067c-.934-.992-2.333-1.48-4.139-1.48ZM110.62 33.496a14.99 14.99 0 0 1-5.481-.902 8.294 8.294 0 0 1-3.397-2.405 9.084 9.084 0 0 1-1.698-3.454 15.647 15.647 0 0 1-.482-4.06 15.42 15.42 0 0 1 .487-4.044 8.972 8.972 0 0 1 1.733-3.403 8.283 8.283 0 0 1 3.397-2.377 14.974 14.974 0 0 1 5.441-.89c3.244 0 5.741.936 7.434 2.779 1.959 2.138 2.83 5.501 2.445 9.721h-16.136c.272 3.783 2.333 5.672 6.126 5.672 2.962 0 4.683-1.1 5.266-3.363h4.835a6.673 6.673 0 0 1-2.502 4.696c-1.744 1.35-4.241 2.03-7.468 2.03Zm-.476-18.15c-3.674 0-5.514 1.782-5.781 5.616h11.324v-.068c0-.034 0 0 0 0a5.61 5.61 0 0 0-1.404-4.067c-.929-.992-2.327-1.48-4.133-1.48h-.006Z"></path>
                    </g>
                    <defs>
                      <clipPath id="logo-agentero_svg__a">
                        <path fill="#fff" transform="translate(0 6)" d="M0 0h154v38H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </Link>
              </div>
            </div>
            <div className={"col-1-5 mobile-col-1-1"}>
              <div className="content">
                <Link to={"https://github.com/lyft/atlantis"}>
                  <img src={lyft} alt={"Lyft"} />
                </Link>
              </div>
            </div>
            <div className={"col-1-5 mobile-col-1-1"}>
              <div className="content">
                <Link to={"https://cast.ai"}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="144.5" height="58.5" fill="none" viewBox="0 0 289 117">
                    <path fill="#000"
                          d="M85.769 67.888a16.836 16.836 0 0 1 1.159 6.178c0 2.1-.377 4.186-1.16 6.179a16.314 16.314 0 0 1-3.522 5.421L57.26 111.355a15.87 15.87 0 0 1-5.283 3.599 15.648 15.648 0 0 1-12.042 0 16.072 16.072 0 0 1-5.299-3.599l-3.236-3.321L4.922 80.847A17.505 17.505 0 0 1 1.4 75.642C.542 73.68 0 71.502 0 69.232V46.586c.15-4.233 1.776-8.11 4.59-10.998L34.576 4.804C37.691 1.622 41.8-.016 45.88 0c2.047 0 4.079.386 6.02 1.19a16.05 16.05 0 0 1 5.3 3.613l25.138 25.811a16.193 16.193 0 0 1 3.507 5.422 16.796 16.796 0 0 1 1.174 6.178 17.16 17.16 0 0 1-1.159 6.18 16.537 16.537 0 0 1-3.522 5.436l-4.23 4.34-6.262 6.426L57.2 79.627a15.866 15.866 0 0 1-5.283 3.599 15.7 15.7 0 0 1-6.021 1.205c-2.017 0-4.08-.402-6.021-1.205a16.025 16.025 0 0 1-5.284-3.6l-2.604-2.61-6.954-7.136a16.536 16.536 0 0 1-3.522-5.437 17.092 17.092 0 0 1-1.16-6.179c0-2.1.392-4.186 1.16-6.178a16.536 16.536 0 0 1 3.522-5.437l9.573-9.824a16.148 16.148 0 0 1 5.284-3.615 15.628 15.628 0 0 1 6.02-1.19c2.048 0 4.08.387 6.022 1.19a16.24 16.24 0 0 1 5.298 3.6l9.423 9.669-6.247 6.41-9.423-9.654a7.214 7.214 0 0 0-2.378-1.622 6.778 6.778 0 0 0-2.694-.54c-.918 0-1.837.17-2.695.54a7.26 7.26 0 0 0-2.378 1.622l-9.558 9.84a7.427 7.427 0 0 0-1.58 2.44 7.275 7.275 0 0 0-.528 2.765c0 .942.181 1.884.527 2.765.361.88.858 1.699 1.58 2.44l6.955 7.137 2.589 2.656a7.31 7.31 0 0 0 2.363 1.622c.858.371 1.776.54 2.695.54a6.77 6.77 0 0 0 2.694-.54 7.799 7.799 0 0 0 2.378-1.622l1.942-1.992 23.361-23.973-.015-.016a7.36 7.36 0 0 0 1.43-2.27 7.26 7.26 0 0 0 .527-2.765 7.26 7.26 0 0 0-.527-2.765 7.506 7.506 0 0 0-1.58-2.44L50.952 11.26a7.37 7.37 0 0 0-2.378-1.622 6.818 6.818 0 0 0-2.724-.54c-.919 0-1.837.169-2.695.54a7.563 7.563 0 0 0-2.363 1.622L10.988 42.015c-1.325 1.359-2.077 3.089-2.153 4.865v22.336c0 .911.226 1.792.618 2.688.391.88.978 1.776 1.7 2.517l26.478 27.171 3.236 3.321a7.074 7.074 0 0 0 2.363 1.622 6.79 6.79 0 0 0 2.695.54 7.06 7.06 0 0 0 2.694-.54 7.298 7.298 0 0 0 2.378-1.622l24.987-25.641a7.428 7.428 0 0 0 1.581-2.44c.361-.881.527-1.824.527-2.766s-.166-1.884-.527-2.765c-.15-.37-.316-.71-.527-1.035l6.337-6.503c1.009 1.282 1.822 2.657 2.394 4.125Zm65.788-1.073c-.602 3.12-1.656 5.9-3.221 8.372-1.536 2.456-3.432 4.541-5.645 6.194-2.198 1.668-4.636 2.92-7.27 3.815-2.68.85-5.374 1.313-8.174 1.313-3.823 0-7.27-.726-10.356-2.147a24.091 24.091 0 0 1-7.932-5.885c-2.213-2.502-3.914-5.468-5.118-8.882-1.205-3.429-1.807-7.136-1.807-11.136 0-4.001.602-7.708 1.807-11.138 1.204-3.429 2.92-6.41 5.148-8.928a23.19 23.19 0 0 1 8.128-5.916c3.191-1.436 6.713-2.147 10.582-2.147 2.845 0 5.599.448 8.234 1.39a23.639 23.639 0 0 1 7.044 3.94c2.077 1.668 3.823 3.738 5.253 6.116 1.174 1.977 2.048 4.17 2.604 6.596H139.53c-.692-2.194-1.912-4.016-3.718-5.484-2.213-1.791-4.907-2.687-8.083-2.687-1.821 0-3.537.34-5.208 1.035-1.656.71-3.116 1.791-4.365 3.305-1.28 1.483-2.288 3.352-3.011 5.623-.738 2.27-1.129 4.974-1.129 8.186 0 3.198.391 5.916 1.129 8.233.738 2.286 1.746 4.17 3.011 5.7 1.279 1.483 2.724 2.595 4.335 3.29a12.13 12.13 0 0 0 4.952 1.035c1.43 0 2.83-.17 4.2-.494 1.369-.325 2.619-.912 3.808-1.668a12.13 12.13 0 0 0 3.01-3.043c.828-1.236 1.445-2.75 1.837-4.542h11.259v-.046Zm17.958 19.607c-2.363-.772-4.411-1.854-6.127-3.244a14.383 14.383 0 0 1-3.988-5.035c-.934-1.962-1.4-4.171-1.4-6.642 0-3.322.933-6.102 2.814-8.295 1.867-2.194 4.426-4 7.632-5.391 3.206-1.406 6.939-2.456 11.184-3.197 4.26-.727 8.776-1.36 13.562-1.9v-1.004c0-2.271-.286-4.171-.888-5.731-.587-1.56-1.385-2.796-2.378-3.692-1.009-.911-2.168-1.544-3.507-1.946a14.219 14.219 0 0 0-4.14-.602c-2.92 0-5.358.803-7.345 2.41-1.987 1.59-3.041 4.015-3.161 7.29h-11.38c.181-2.734.888-5.236 2.047-7.476a18.52 18.52 0 0 1 4.666-5.839c1.942-1.637 4.23-2.889 6.864-3.784 2.634-.896 5.525-1.344 8.701-1.344 3.116 0 6.036.401 8.745 1.19 2.725.802 5.103 2.1 7.105 3.876 2.002 1.792 3.567 4.17 4.666 7.136 1.099 2.966 1.626 6.58 1.551 10.829 0 .68-.015 1.544-.061 2.595-.03 1.05-.06 2.224-.06 3.506 0 1.267-.015 2.58-.06 3.939-.03 1.36-.06 2.657-.06 3.846 0 3.383.135 6.735.391 10.04.256 3.29.662 6.07 1.159 8.326h-10.612c-.18-1.128-.376-2.147-.542-3.09-.165-.926-.301-2.332-.436-4.186-1.686 2.92-4.004 5.098-6.955 6.488-2.935 1.406-6.367 2.1-10.25 2.1-2.755-.03-5.374-.4-7.737-1.173Zm13.381-24.004c-2.92.54-5.328 1.19-7.195 1.993-1.866.803-3.266 1.745-4.139 2.842-.888 1.096-1.31 2.41-1.31 3.939 0 2.332.888 4.155 2.619 5.483 1.747 1.329 4.08 1.993 7.015 1.993 4.275 0 7.632-1.112 10.025-3.352 2.393-2.225 3.597-5.638 3.597-10.226v-4.093c-4.169.417-7.706.896-10.612 1.421Zm58.284-21.506c-2.047-1.035-4.515-1.544-7.436-1.544-2.528 0-4.771.54-6.758 1.59-1.972 1.05-2.966 2.503-2.966 4.295 0 1.791.603 3.197 1.807 4.186 1.204 1.004 2.935 1.73 5.208 2.193l7.391 1.498a70.06 70.06 0 0 1 7.39 1.9c2.273.726 4.26 1.715 5.946 2.935 1.686 1.236 2.996 2.75 3.929 4.541.933 1.792 1.4 4.001 1.4 6.58 0 2.796-.602 5.268-1.807 7.446-1.204 2.147-2.814 3.985-4.846 5.437-2.033 1.452-4.381 2.58-7.045 3.352-2.664.772-5.479 1.158-8.475 1.158-3.236 0-6.171-.448-8.805-1.343-2.619-.912-4.907-2.132-6.864-3.692a18.955 18.955 0 0 1-4.727-5.592c-1.204-2.147-1.972-4.495-2.288-7.043h11.275c.526 2.795 1.746 4.942 3.688 6.44 1.941 1.5 4.636 2.256 8.083 2.256 3.055 0 5.569-.618 7.526-1.854 1.972-1.235 2.965-2.934 2.965-5.128 0-2.193-.858-3.846-2.589-4.943-1.731-1.096-3.883-1.9-6.472-2.44l-7.873-1.591a36.83 36.83 0 0 1-6.186-1.854c-1.912-.772-3.583-1.776-4.998-2.996-1.43-1.236-2.544-2.734-3.356-4.48-.813-1.776-1.22-3.877-1.22-6.349 0-2.41.587-4.54 1.746-6.44 1.159-1.9 2.725-3.523 4.667-4.882 1.941-1.36 4.199-2.41 6.758-3.135 2.559-.726 5.269-1.097 8.113-1.097 2.529 0 4.983.309 7.391.942 2.394.633 4.576 1.622 6.518 2.935 1.942 1.328 3.598 2.997 4.967 5.005 1.37 2.008 2.303 4.325 2.815 6.981h-10.883c-.617-2.502-1.942-4.232-3.989-5.267Zm37.328.459v32.732h10.491v11.075h-13.441c-4.772 0-8.64-3.985-8.64-8.867v-34.94h-7.527V31.27h7.527V20.163h11.575V31.27h10.491v10.1h-10.476Z" />
                  </svg>
                </Link>

              </div>
            </div>
            <div className={'col-1-5 mobile-col-1-1'}>
              <div className="content">
                <img src={chapatiSystems} alt={"chapati systems"} width="70"/>
              </div>
            </div>
            <div className={"col-1-5 mobile-col-1-1"}>
              <div className="content"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactUs}>
        Want to be listed here?{' '}
        <Link to={'mailto:contact@gofeatureflag.org'}>Contact us</Link> or add yourself to our <Link to={'https://github.com/thomaspoignant/go-feature-flag/blob/main/ADOPTERS.md'}>adopters</Link> list.
      </div>
    </section>
  );
}
