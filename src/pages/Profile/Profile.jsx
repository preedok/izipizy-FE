import React, { useState, useEffect } from 'react';
import profile from '../../assets/images/profile/img-profile.png';
import iconEdit from '../../assets/images/profile/Vector.png';
import style from '../../pages/Profile/style.module.css';
import { Link } from 'react-router-dom';
import Navs from '../../components/Navbar/navbar';

// aos
import AOS from 'aos';
import 'aos/dist/aos.css';

const Profile = () => {
  const [view, setView] = useState('MyRecipe');

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navs />
      <section className={style.margin}>
        <div className={style.boxContainer}>
          <div className={style.box}>
            <div className={style.containerOne}>
              <div className={style.profile}>
                <Link to="/login">
                  <img src={profile} alt="User" className={style.userProfile} data-aos="fade-right" data-aos-duration="1000" />
                </Link>
                <button style={{ border: 'none' }} type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  <img src={iconEdit} alt="edit" className={style.iEdit} data-aos="fade-left" data-aos-duration="1500" />
                </button>

                {/* modal body */}
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Update Profile
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Name" />
                        <input type="file" className="form-control mt-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" placeholder="Change Photo" />
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">
                          Close
                        </button>
                        <button type="button" className="btn btn-outline-warning">
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* modal body end */}

                <h1 data-aos="fade-left" data-aos-duration="1000">
                  Iqbal Apredo
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5">
          <div>
            {view === 'MyRecipe' ? (
              <>
                <button onClick={() => setView('MyRecipe')} style={{ border: 'none', background: 'none' }} className={`${style.list} me-3`}>
                  My Recipe
                </button>
              </>
            ) : view === 'saveRecipe' ? (
              <>
                <button onClick={() => setView('MyRecipe')} style={{ border: 'none', background: 'none' }} className={`${style.list} me-3`}>
                  Save Recipe
                </button>
              </>
            ) : view === 'likedRecipe' ? (
              <>
                <button onClick={() => setView('MyRecipe')} style={{ border: 'none', background: 'none' }} className={`${style.list} me-3`}>
                  Liked Recipe
                </button>
              </>
            ) : (
              ''
            )}
            <hr />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
