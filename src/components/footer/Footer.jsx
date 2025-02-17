
import React from "react";
import { useTranslation } from "react-i18next";
import whatsapp from "../../assets/svg/ic-whatsapp.svg";
import instagram from "../../assets/svg/ic-instagram.svg";
import styles from "./footer.module.css";
import "../../css/global.css"

function Footer() {
  const { t } = useTranslation();

  return (
    <div className={styles.footer} data-aos="fade-up">
      <div className={styles.footer_title}>
        <h2 className="title_h2">{t('contact')}</h2>
      </div>
      <div className={styles.footer_container}>
        <div className={styles.footer_info}>
          <div className={styles.footer_info_cards}>
            <div className={styles.footer_info_phone}>
              <p className={styles.footer_info_phone_title}>{t('phone')}</p>
              <p className={styles.footer_info_phone_number}>+49 30 915-88492</p>
            </div>
            <div className={styles.footer_info_social}>
              <p className={styles.footer_info_phone_title}>{t('social')}</p>
              <div className={styles.footer_info_phone_img}>
                <a href="https://www.instagram.com/"><img src={instagram} alt="Instagram"  /></a>
                <a href="https://www.whatsapp.com/?lang=ru_RU"><img src={whatsapp} alt="WhatsApp" /></a>
              </div>
            </div>
          </div>
          <div className={styles.footer_info_cards}>
            <div className={styles.footer_info_phone}>
              <p className={styles.footer_info_phone_title}>{t('address')}</p>
              <p className={styles.footer_info_phone_number}>Wallstraße 9-13, 10179 Berlin, Deutschland</p>
            </div>
            <div className={styles.footer_info_social}>
              <p className={styles.footer_info_phone_title}>{t('workingHours')}</p>
              <p className={styles.footer_info_phone_number}>{t('hoursDay')}</p>
            </div>
          </div>
        </div>
        <div className={styles.footer_map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.7980541597695!2d13.411708115915275!3d52.51418307981239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c9e098c6d1%3A0x421b1f5741d50a0!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin%2C%20Germany!5e0!3m2!1sen!2sus!4v1641229612815!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;
