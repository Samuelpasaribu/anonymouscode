const encryptedCode = 'ICAgICAgICAvLyBLb25maWd1cmFzaSBGaXJlYmFzZSAoc2VzdWFpa2FuIGRlbmdhbiBwcm95ZWsgRmlyZWJhc2UgQW5kYSkKdmFyIGZpcmViYXNlQ29uZmlnID0gewogICAgYXBpS2V5OiAiQUl6YVN5Qml5ZU93YlFlV215TDYxTXJDUVM0U2pFbEFDcUI2SzhFIiwKICAgIGF1dGhEb21haW46ICJhbm9ueW1vdXNjb2RlLmZpcmViYXNlYXBwLmNvbSIsCiAgICBwcm9qZWN0SWQ6ICJhbm9ueW1vdXNjb2RlIiwKICAgIHN0b3JhZ2VCdWNrZXQ6ICJhbm9ueW1vdXNjb2RlLmFwcHNwb3QuY29tIiwKICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAiMTcwNDg2MTc2NDY2IiwKICAgIGFwcElkOiAiMToxNzA0ODYxNzY0NjY6d2ViOmMxMzkxODVjM2JlZDUwNzQ1NmFiMGIiCn07CgovLyBJbmlzaWFsaXNhc2kgRmlyZWJhc2UKZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7CgovLyBJbmlzaWFsaXNhc2kgRmlyZWJhc2UgU3RvcmFnZQp2YXIgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTsKdmFyIHN0b3JhZ2VSZWYgPSBzdG9yYWdlLnJlZigpOwoKLy8gSW5pc2lhbGlzYXNpIEZpcmViYXNlIFJlYWx0aW1lIERhdGFiYXNlCnZhciBkYXRhYmFzZSA9IGZpcmViYXNlLmRhdGFiYXNlKCk7CnZhciBmaWxlc1JlZiA9IGRhdGFiYXNlLnJlZignaHRtbC1maWxlcycpOwoKLy8gSW5pc2lhbGlzYXNpIGFycmF5IHVudHVrIG1lbnlpbXBhbiBkYXRhIGZpbGUKdmFyIGZpbGVzRGF0YSA9IFtdOwoKLy8gRnVuZ3NpIHVudHVrIG1lbmRhcGF0a2FuIHRhbmdnYWwgdGVyYWtoaXIga2FsaSBkaW1vZGlmaWthc2kgZGFyaSBGaXJlYmFzZSBTdG9yYWdlCmZ1bmN0aW9uIGdldExhc3RNb2RpZmllZChmaWxlTmFtZSkgewogICAgcmV0dXJuIHN0b3JhZ2VSZWYuY2hpbGQoJ2h0bWwtZmlsZXMvJyArIGZpbGVOYW1lKS5nZXRNZXRhZGF0YSgpLnRoZW4oZnVuY3Rpb24obWV0YWRhdGEpIHsKICAgICAgICByZXR1cm4gbmV3IERhdGUobWV0YWRhdGEudXBkYXRlZCk7CiAgICB9KTsKfQoKLy8gUGFuZ2dpbCBmdW5nc2kgZGlzcGxheUZpbGVzSW5UYWJsZSBzYWF0IGhhbGFtYW4gZGltdWF0CndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7CiAgICAvLyBEYXBhdGthbiBkYWZ0YXIgZmlsZSBkYXJpIEZpcmViYXNlIFJlYWx0aW1lIERhdGFiYXNlIGRhbiB1cnV0a2FuIGJlcmRhc2Fya2FuIHZpZXdzIHNlY2FyYSBkZXNjZW5kaW5nCiAgICBmaWxlc1JlZi5vcmRlckJ5Q2hpbGQoJ3ZpZXdzJykub24oJ3ZhbHVlJywgZnVuY3Rpb24gKHNuYXBzaG90KSB7CiAgICAgICAgLy8gUmVzZXQgZGF0YSBmaWxlIHNlYmVsdW0gbWVuYW1iYWhrYW5ueWEga2VtYmFsaQogICAgICAgIGZpbGVzRGF0YSA9IFtdOwoKICAgICAgICAvLyBJdGVyYXRlIG1lbGFsdWkgc2V0aWFwIGZpbGUgZGFyaSBGaXJlYmFzZSBSZWFsdGltZSBEYXRhYmFzZQogICAgICAgIHNuYXBzaG90LmZvckVhY2goZnVuY3Rpb24oY2hpbGRTbmFwc2hvdCkgewogICAgICAgICAgICB2YXIgZmlsZURhdGEgPSBjaGlsZFNuYXBzaG90LnZhbCgpOwogICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBmaWxlRGF0YS5uYW1lOwogICAgICAgICAgICB2YXIgZmlsZVVSTCA9IGZpbGVEYXRhLnVybDsKICAgICAgICAgICAgdmFyIGZpbGVTaXplID0gZmlsZURhdGEuc2l6ZTsKICAgICAgICAgICAgdmFyIHZpZXdzID0gZmlsZURhdGEudmlld3MgfHwgMDsKCiAgICAgICAgICAgIC8vIERhcGF0a2FuIHRhbmdnYWwgdGVyYWtoaXIga2FsaSBkaW1vZGlmaWthc2kgZGFyaSBGaXJlYmFzZSBTdG9yYWdlCiAgICAgICAgICAgIGdldExhc3RNb2RpZmllZChmaWxlTmFtZSkudGhlbihmdW5jdGlvbihsYXN0TW9kaWZpZWQpIHsKICAgICAgICAgICAgICAgIC8vIEZvcm1hdCB0YW5nZ2FsIHRlcmFraGlyIGthbGkgZGltb2RpZmlrYXNpCiAgICAgICAgICAgICAgICB2YXIgZm9ybWF0dGVkTGFzdE1vZGlmaWVkID0gbGFzdE1vZGlmaWVkLnRvTG9jYWxlRGF0ZVN0cmluZyh1bmRlZmluZWQsIHsKICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsCiAgICAgICAgICAgICAgICAgICAgbW9udGg6ICdsb25nJywKICAgICAgICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJywKICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsCiAgICAgICAgICAgICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsCiAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiAnMi1kaWdpdCcsCiAgICAgICAgICAgICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnCiAgICAgICAgICAgICAgICB9KTsKCiAgICAgICAgICAgICAgICAvLyBUYW1iYWhrYW4gaW5mb3JtYXNpIGZpbGUga2UgZGFsYW0gYXJyYXkKICAgICAgICAgICAgICAgIGZpbGVzRGF0YS5wdXNoKHsKICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlTmFtZSwKICAgICAgICAgICAgICAgICAgICB1cmw6IGZpbGVVUkwsCiAgICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZVNpemUsCiAgICAgICAgICAgICAgICAgICAgdmlld3M6IHZpZXdzLAogICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogZm9ybWF0dGVkTGFzdE1vZGlmaWVkCiAgICAgICAgICAgICAgICB9KTsKCiAgICAgICAgICAgICAgICAvLyBVcnV0a2FuIGZpbGVzRGF0YSBiZXJkYXNhcmthbiB2aWV3cyBzZWNhcmEgZGVzY2VuZGluZwogICAgICAgICAgICAgICAgZmlsZXNEYXRhLnNvcnQoZnVuY3Rpb24oYSwgYikgewogICAgICAgICAgICAgICAgICAgIHJldHVybiBiLnZpZXdzIC0gYS52aWV3czsKICAgICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgICAgIC8vIFRhbXBpbGthbiBmaWxlIGRhbGFtIHRhYmVsIHNldGVsYWggcGVuZ3VydXRhbgogICAgICAgICAgICAgICAgZGlzcGxheUZpbGVzSW5UYWJsZShmaWxlc0RhdGEpOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgIH0pOwp9OwoKLy8gRnVuZ3NpIHVudHVrIG1lbmFtYmFoa2FuIGluZm9ybWFzaSBmaWxlIGtlIGRhbGFtIHRhYmVsCmZ1bmN0aW9uIGFkZEZpbGVUb1RhYmxlKGZpbGVOYW1lLCBmaWxlVVJMLCBmaWxlU2l6ZSwgdmlld3MsIGxhc3RNb2RpZmllZCkgewogICAgdmFyIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtdGFibGUnKTsKICAgIHZhciBuZXdSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTsKICAgIHZhciBjZWxsMSA9IG5ld1Jvdy5pbnNlcnRDZWxsKDApOwogICAgdmFyIGNlbGwyID0gbmV3Um93Lmluc2VydENlbGwoMSk7CiAgICB2YXIgY2VsbDMgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgyKTsKICAgIHZhciBjZWxsNCA9IG5ld1Jvdy5pbnNlcnRDZWxsKDMpOwogICAgdmFyIGNlbGw1ID0gbmV3Um93Lmluc2VydENlbGwoNCk7CgogICAgY2VsbDEuaW5uZXJIVE1MID0gZmlsZU5hbWU7CiAgICBjZWxsMi5pbm5lckhUTUwgPSBmaWxlU2l6ZTsKICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpOwogICAgbGluay5ocmVmID0gZmlsZVVSTDsKICAgIGxpbmsudGFyZ2V0ID0gJ19ibGFuayc7CiAgICBsaW5rLnRleHRDb250ZW50ID0gJ09wZW4nOwogICAgY2VsbDMuYXBwZW5kQ2hpbGQobGluayk7CiAgICBjZWxsNC5pbm5lckhUTUwgPSB2aWV3czsKCiAgICAvLyBUYW1waWxrYW4gdGFuZ2dhbCB0ZXJha2hpciBrYWxpIGRpbW9kaWZpa2FzaQogICAgY2VsbDUuaW5uZXJIVE1MID0gbGFzdE1vZGlmaWVkOwoKICAgIC8vIFRhbWJhaGthbiBldmVudCBsaXN0ZW5lciB1bnR1ayBtZW5naGl0dW5nIGp1bWxhaCBrbGlrCiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGV2ZW50KSB7CiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsKICAgICAgICB2YXIgY2xpY2tlZEZpbGVOYW1lID0gZmlsZU5hbWU7CgogICAgICAgIGZpbGVzUmVmLm9yZGVyQnlDaGlsZCgnbmFtZScpLmVxdWFsVG8oY2xpY2tlZEZpbGVOYW1lKS5vbmNlKCd2YWx1ZScsIGZ1bmN0aW9uIChzbmFwc2hvdCkgewogICAgICAgICAgICBpZiAoc25hcHNob3QuZXhpc3RzKCkpIHsKICAgICAgICAgICAgICAgIHZhciBmaWxlS2V5ID0gT2JqZWN0LmtleXMoc25hcHNob3QudmFsKCkpWzBdOwogICAgICAgICAgICAgICAgdmFyIHZpZXdDb3VudCA9IChzbmFwc2hvdC52YWwoKVtmaWxlS2V5XS52aWV3cyB8fCAwKSArIDE7CgogICAgICAgICAgICAgICAgLy8gU2ltcGFuIGp1bWxhaCB2aWV3cyB5YW5nIHRlbGFoIGRpdGluZ2thdGthbiBrZW1iYWxpIGtlIEZpcmViYXNlIFJlYWx0aW1lIERhdGFiYXNlCiAgICAgICAgICAgICAgICBmaWxlc1JlZi5jaGlsZChmaWxlS2V5KS51cGRhdGUoeyB2aWV3czogdmlld0NvdW50IH0pLnRoZW4oZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgIC8vIFBlcmJhcnVpIHRhbXBpbGFuIGp1bWxhaCB2aWV3cwogICAgICAgICAgICAgICAgICAgIGNlbGw0LnRleHRDb250ZW50ID0gdmlld0NvdW50OwoKICAgICAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIGhhbGFtYW4gc2FhdCBqdW1sYWggdmlld3MgdGVsYWggZGlwZXJiYXJ1aQogICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihsaW5rLmhyZWYsICdfYmxhbmsnKTsgLy8gQnVrYSB0YXV0YW4gZGFsYW0gdGFiIGJhcnUKICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7IC8vIFJlbG9hZCBoYWxhbWFuCiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7CiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsKICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGRhdGluZyB2aWV3czonLCBlcnJvcik7CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgfQogICAgICAgIH0pOwogICAgfSk7Cn0KCi8vIEZ1bmdzaSB1bnR1ayBtZW5hbXBpbGthbiBmaWxlIGRhbGFtIHRhYmVsCmZ1bmN0aW9uIGRpc3BsYXlGaWxlc0luVGFibGUoZmlsZXNEYXRhKSB7CiAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS10YWJsZScpOwogICAgLy8gS29zb25na2FuIHRhYmVsIHNlYmVsdW0gbWVuYW1iYWhrYW4gZGF0YSBiYXJ1CiAgICB0YWJsZS5pbm5lckhUTUwgPSAnJzsKCiAgICAvLyBUYW1iYWhrYW4ganVkdWwga29sb20KICAgIHZhciB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7CiAgICB2YXIgcm93ID0gdGhlYWQuaW5zZXJ0Um93KCk7CiAgICB2YXIgY2VsbDEgPSByb3cuaW5zZXJ0Q2VsbCgwKTsKICAgIHZhciBjZWxsMiA9IHJvdy5pbnNlcnRDZWxsKDEpOwogICAgdmFyIGNlbGwzID0gcm93Lmluc2VydENlbGwoMik7CiAgICB2YXIgY2VsbDQgPSByb3cuaW5zZXJ0Q2VsbCgzKTsKICAgIHZhciBjZWxsNSA9IHJvdy5pbnNlcnRDZWxsKDQpOwogICAgY2VsbDEuaW5uZXJIVE1MID0gJzxiPkZpbGUgTmFtZTwvYj4nOwogICAgY2VsbDIuaW5uZXJIVE1MID0gJzxiPlNpemU8L2I+JzsKICAgIGNlbGwzLmlubmVySFRNTCA9ICc8Yj5MaW5rPC9iPic7CiAgICBjZWxsNC5pbm5lckhUTUwgPSAnPGI+Vmlld3M8L2I+JzsKICAgIGNlbGw1LmlubmVySFRNTCA9ICc8Yj5VcGRhdGU8L2I+JzsKCiAgICAvLyBUYW1iYWhrYW4gZGF0YSBmaWxlIGtlIGRhbGFtIHRhYmVsCiAgICBmaWxlc0RhdGEuZm9yRWFjaChmdW5jdGlvbihmaWxlRGF0YSkgewogICAgICAgIGFkZEZpbGVUb1RhYmxlKGZpbGVEYXRhLm5hbWUsIGZpbGVEYXRhLnVybCwgZmlsZURhdGEuc2l6ZSwgZmlsZURhdGEudmlld3MsIGZpbGVEYXRhLmxhc3RNb2RpZmllZCk7CiAgICB9KTsKfQoKLy8gRnVuZ3NpIHVudHVrIG1lbmNhcmkgZmlsZSBiZXJkYXNhcmthbiBuYW1hCmZ1bmN0aW9uIHNlYXJjaEZpbGVzQnlOYW1lKGZpbGVzRGF0YSwgc2VhcmNoVGVybSkgewogICAgcmV0dXJuIGZpbGVzRGF0YS5maWx0ZXIoZnVuY3Rpb24gKGZpbGVEYXRhKSB7CiAgICAgICAgcmV0dXJuIGZpbGVEYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCkpOwogICAgfSk7Cn0KCi8vIFRhbmdhbmkgcGVydWJhaGFuIHBhZGEgaW5wdXQgcGVuY2FyaWFuCmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHsKICAgIHZhciBzZWFyY2hUZXJtID0gdGhpcy52YWx1ZS50cmltKCk7CiAgICB2YXIgZmlsdGVyZWRGaWxlcyA9IHNlYXJjaEZpbGVzQnlOYW1lKGZpbGVzRGF0YSwgc2VhcmNoVGVybSk7CiAgICBkaXNwbGF5RmlsZXNJblRhYmxlKGZpbHRlcmVkRmlsZXMpOwp9KTsKCi8vIFRhbmdhbmkgcGVuZ3VuZ2dhaGFuIGZpbGUga2V0aWthIGZvcm11bGlyIGRpLXN1Ym1pdApkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBsb2FkLWZvcm0nKS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbiAoZSkgewogICAgZS5wcmV2ZW50RGVmYXVsdCgpOwogICAgdmFyIGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodG1sLWZpbGUnKTsKICAgIHZhciBmaWxlID0gZmlsZUlucHV0LmZpbGVzWzBdOwoKICAgIC8vIFBlcmlrc2EgYXBha2FoIHBlbmdndW5hIHRlbGFoIG1lbWlsaWggZmlsZQogICAgaWYgKCFmaWxlKSB7CiAgICAgICAgc2hvd05vdGlmaWNhdGlvbignQW5kYSBiZWx1bSBtZW1pbGloIGZpbGUgdW50dWsgZGl1bmdnYWguJyk7CiAgICAgICAgcmV0dXJuOwogICAgfQoKICAgIC8vIFRhbXBpbGthbiBhbmltYXNpIGxvYWRpbmcgc2ViZWx1bSBtZW5ndW5nZ2FoCiAgICBzaG93TG9hZGluZ0FuaW1hdGlvbigpOwoKICAgIC8vIFNpbXBhbiBmaWxlIEhUTUwga2UgRmlyZWJhc2UgU3RvcmFnZQogICAgdmFyIHVwbG9hZFRhc2sgPSBzdG9yYWdlUmVmLmNoaWxkKCdodG1sLWZpbGVzLycgKyBmaWxlLm5hbWUpLnB1dChmaWxlKTsKCiAgICB1cGxvYWRUYXNrLm9uKCdzdGF0ZV9jaGFuZ2VkJywKICAgICAgICBmdW5jdGlvbiBwcm9ncmVzcyhzbmFwc2hvdCkgewogICAgICAgICAgICB2YXIgcGVyY2VudGFnZSA9IChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7CiAgICAgICAgICAgIC8vIFBlcmJhcnVpIHBlcnNlbnRhc2UgZGkgYW5pbWFzaSBsb2FkaW5nCiAgICAgICAgICAgIHZhciBsb2FkaW5nUGVyY2VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkaW5nLXBlcmNlbnQnKTsKICAgICAgICAgICAgbG9hZGluZ1BlcmNlbnQuaW5uZXJUZXh0ID0gcGVyY2VudGFnZS50b0ZpeGVkKDIpICsgJyUnOwogICAgICAgIH0sCiAgICAgICAgZnVuY3Rpb24gZXJyb3IoZXJyb3IpIHsKICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBsb2FkaW5nIGZpbGU6JywgZXJyb3IpOwogICAgICAgICAgICAvLyBTZW1idW55aWthbiBhbmltYXNpIGppa2EgdGVyamFkaSBrZXNhbGFoYW4KICAgICAgICAgICAgaGlkZUxvYWRpbmdBbmltYXRpb24oKTsKICAgICAgICB9LAogICAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkgewogICAgICAgICAgICAvLyBGaWxlIGJlcmhhc2lsIGRpdW5nZ2FoLCBBbmRhIGRhcGF0IG1lbmFtYmFoa2FubnlhIGtlIGRhdGFiYXNlIGF0YXUgbWVuZ2FtYmlsIFVSTAogICAgICAgICAgICAvLyBsYWx1IG1lbmFtcGlsa2FubnlhIGRhbGFtIHRhYmVsCgogICAgICAgICAgICAvLyBEYXBhdGthbiBVUkwgZmlsZSB5YW5nIGRpdW5nZ2FoCiAgICAgICAgICAgIHVwbG9hZFRhc2suc25hcHNob3QucmVmLmdldERvd25sb2FkVVJMKCkudGhlbihmdW5jdGlvbiAoZG93bmxvYWRVUkwpIHsKICAgICAgICAgICAgICAgIC8vIENlayBhcGFrYWggZmlsZSBkZW5nYW4gbmFtYSB5YW5nIHNhbWEgc3VkYWggYWRhIGRpIEZpcmViYXNlIFJlYWx0aW1lIERhdGFiYXNlCiAgICAgICAgICAgICAgICBmaWxlc1JlZi5vcmRlckJ5Q2hpbGQoJ25hbWUnKS5lcXVhbFRvKGZpbGUubmFtZSkub25jZSgndmFsdWUnLCBmdW5jdGlvbiAoc25hcHNob3QpIHsKICAgICAgICAgICAgICAgICAgICBpZiAoIXNuYXBzaG90LmV4aXN0cygpKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1lbmd1a3VyIHVrdXJhbiBmaWxlCiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlU2l6ZSA9IGZvcm1hdEJ5dGVzKGZpbGUuc2l6ZSk7CgogICAgICAgICAgICAgICAgICAgICAgICAvLyBKaWthIGJlbHVtIGFkYSwgdGFtYmFoa2FuIGluZm9ybWFzaSBmaWxlIGtlIEZpcmViYXNlIFJlYWx0aW1lIERhdGFiYXNlCiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlRGF0YSA9IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUubmFtZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG93bmxvYWRVUkwsCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBmaWxlU2l6ZSwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdzOiAwIC8vIEluaXNpYWxpc2FzaSBqdW1sYWggdmlld3Mga2UgMAogICAgICAgICAgICAgICAgICAgICAgICB9OwogICAgICAgICAgICAgICAgICAgICAgICBmaWxlc1JlZi5wdXNoKGZpbGVEYXRhKS50aGVuKGZ1bmN0aW9uICgpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbWJ1bnlpa2FuIGFuaW1hc2kgbG9hZGluZwogICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxvYWRpbmdBbmltYXRpb24oKTsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUYW1waWxrYW4gbm90aWZpa2FzaQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignRmlsZSBiZXJoYXNpbCBkaXVuZ2dhaCBkYW4gZGFwYXQgZGljYXJpIGJlcmRhc2Fya2FuIG5hbWEgZmlsZS4nKTsKCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZWxvYWQgaGFsYW1hbiBzZXRlbGFoIG5vdGlmaWthc2kgZGl0dXR1cAogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTsKICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBhZGRpbmcgZmlsZSBkYXRhOicsIGVycm9yKTsKICAgICAgICAgICAgICAgICAgICAgICAgfSk7CiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VtYnVueWlrYW4gYW5pbWFzaSBsb2FkaW5nCiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVMb2FkaW5nQW5pbWF0aW9uKCk7CiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRhbXBpbGthbiBub3RpZmlrYXNpCiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oJ0ZpbGUgZGVuZ2FuIG5hbWEgeWFuZyBzYW1hIHN1ZGFoIGFkYS4nKTsKICAgICAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgICAgICB9KTsKICAgICAgICAgICAgfSk7CiAgICAgICAgfQogICAgKTsKfSk7CgovLyBGdW5nc2kgdW50dWsgbWVuYW1waWxrYW4gbm90aWZpa2FzaQpmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UpIHsKICAgIHZhciBub3RpZmljYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uJyk7CiAgICB2YXIgbm90aWZpY2F0aW9uTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24tbWVzc2FnZScpOwogICAgdmFyIG5vdGlmaWNhdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24tYnV0dG9uJyk7CiAgICBub3RpZmljYXRpb25NZXNzYWdlLmlubmVyVGV4dCA9IG1lc3NhZ2U7CiAgICBub3RpZmljYXRpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7CgogICAgbm90aWZpY2F0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkgewogICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwogICAgfSk7Cn0KCi8vIFRhbXBpbGthbiBhbmltYXNpIGxvYWRpbmcKZnVuY3Rpb24gc2hvd0xvYWRpbmdBbmltYXRpb24oKSB7CiAgICB2YXIgbG9hZGluZ0FuaW1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLWFuaW1hdGlvbicpOwogICAgbG9hZGluZ0FuaW1hdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsKCiAgICAvLyBSZXNldCBuaWxhaSBwZXJzZW50YXNlCiAgICBjdXJyZW50UHJvZ3Jlc3MgPSAwOwogICAgdmFyIGxvYWRpbmdQZXJjZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRpbmctcGVyY2VudCcpOwogICAgbG9hZGluZ1BlcmNlbnQuaW5uZXJUZXh0ID0gJzAlJzsKCiAgICAvLyBKYWxhbmthbiBmdW5nc2kgdXBkYXRlUHJvZ3Jlc3Mgc2V0aWFwIDQwbXMgdW50dWsgbWVuZ3VwZGF0ZSBwZXJzZW50YXNlCiAgICB2YXIgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHVwZGF0ZVByb2dyZXNzLCA0MCk7CgogICAgLy8gRnVuZ3NpIHVudHVrIG1lbmd1cGRhdGUgcGVyc2VudGFzZQogICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7CiAgICAgICAgY3VycmVudFByb2dyZXNzICs9IDE7CiAgICAgICAgaWYgKGN1cnJlbnRQcm9ncmVzcyA8PSAxMDApIHsKICAgICAgICAgICAgbG9hZGluZ1BlcmNlbnQuaW5uZXJUZXh0ID0gY3VycmVudFByb2dyZXNzICsgJyUnOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7CiAgICAgICAgfQogICAgfQp9CgovLyBTZW1idW55aWthbiBhbmltYXNpIGxvYWRpbmcKZnVuY3Rpb24gaGlkZUxvYWRpbmdBbmltYXRpb24oKSB7CiAgICB2YXIgbG9hZGluZ0FuaW1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLWFuaW1hdGlvbicpOwogICAgbG9hZGluZ0FuaW1hdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOwp9CgovLyBGdW5nc2kgdW50dWsgbWVuZ3VrdXIgdWt1cmFuIGZpbGUKZnVuY3Rpb24gZm9ybWF0Qnl0ZXMoYnl0ZXMsIGRlY2ltYWxzID0gMikgewogICAgaWYgKGJ5dGVzID09PSAwKSByZXR1cm4gJzAgQnl0ZXMnOwoKICAgIGNvbnN0IGsgPSAxMDI0OwogICAgY29uc3QgZG0gPSBkZWNpbWFscyA8IDAgPyAwIDogZGVjaW1hbHM7CiAgICBjb25zdCBzaXplcyA9IFsnQnl0ZXMnLCAnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXTsKCiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7CgogICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoZG0pKSArICcgJyArIHNpemVzW2ldOwp9CgovLyBQYW5nZ2lsIGZ1bmdzaSBkaXNwbGF5RmlsZXNJblRhYmxlIHNhYXQgaGFsYW1hbiBkaW11YXQKd2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHsKICAgIC8vIERhcGF0a2FuIGRhZnRhciBmaWxlIGRhcmkgRmlyZWJhc2UgUmVhbHRpbWUgRGF0YWJhc2UgZGFuIHVydXRrYW4gYmVyZGFzYXJrYW4gdmlld3Mgc2VjYXJhIGRlc2NlbmRpbmcKICAgIGZpbGVzUmVmLm9yZGVyQnlDaGlsZCgndmlld3MnKS5vbigndmFsdWUnLCBmdW5jdGlvbiAoc25hcHNob3QpIHsKICAgICAgICAvLyBSZXNldCBkYXRhIGZpbGUgc2ViZWx1bSBtZW5hbWJhaGthbm55YSBrZW1iYWxpCiAgICAgICAgZmlsZXNEYXRhID0gW107CgogICAgICAgIC8vIEl0ZXJhdGUgbWVsYWx1aSBzZXRpYXAgZmlsZSBkYXJpIEZpcmViYXNlIFJlYWx0aW1lIERhdGFiYXNlCiAgICAgICAgc25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihjaGlsZFNuYXBzaG90KSB7CiAgICAgICAgICAgIHZhciBmaWxlRGF0YSA9IGNoaWxkU25hcHNob3QudmFsKCk7CiAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IGZpbGVEYXRhLm5hbWU7CiAgICAgICAgICAgIHZhciBmaWxlVVJMID0gZmlsZURhdGEudXJsOwogICAgICAgICAgICB2YXIgZmlsZVNpemUgPSBmaWxlRGF0YS5zaXplOwogICAgICAgICAgICB2YXIgdmlld3MgPSBmaWxlRGF0YS52aWV3cyB8fCAwOwoKICAgICAgICAgICAgLy8gRGFwYXRrYW4gdGFuZ2dhbCB0ZXJha2hpciBrYWxpIGRpbW9kaWZpa2FzaSBkYXJpIEZpcmViYXNlIFN0b3JhZ2UKICAgICAgICAgICAgZ2V0TGFzdE1vZGlmaWVkKGZpbGVOYW1lKS50aGVuKGZ1bmN0aW9uKGxhc3RNb2RpZmllZCkgewogICAgICAgICAgICAgICAgLy8gRm9ybWF0IHRhbmdnYWwgdGVyYWtoaXIga2FsaSBkaW1vZGlmaWthc2kKICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRMYXN0TW9kaWZpZWQgPSBsYXN0TW9kaWZpZWQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgewogICAgICAgICAgICAgICAgICAgIHllYXI6ICdudW1lcmljJywKICAgICAgICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLAogICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLAogICAgICAgICAgICAgICAgICAgIGhvdXI6ICcyLWRpZ2l0JywKICAgICAgICAgICAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JywKICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6ICcyLWRpZ2l0JywKICAgICAgICAgICAgICAgICAgICB0aW1lWm9uZU5hbWU6ICdzaG9ydCcKICAgICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgICAgIC8vIFRhbWJhaGthbiBpbmZvcm1hc2kgZmlsZSBrZSBkYWxhbSBhcnJheQogICAgICAgICAgICAgICAgZmlsZXNEYXRhLnB1c2goewogICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGVOYW1lLAogICAgICAgICAgICAgICAgICAgIHVybDogZmlsZVVSTCwKICAgICAgICAgICAgICAgICAgICBzaXplOiBmaWxlU2l6ZSwKICAgICAgICAgICAgICAgICAgICB2aWV3czogdmlld3MsCiAgICAgICAgICAgICAgICAgICAgbGFzdE1vZGlmaWVkOiBmb3JtYXR0ZWRMYXN0TW9kaWZpZWQKICAgICAgICAgICAgICAgIH0pOwoKICAgICAgICAgICAgICAgIC8vIFVydXRrYW4gZmlsZXNEYXRhIGJlcmRhc2Fya2FuIHZpZXdzIHNlY2FyYSBkZXNjZW5kaW5nCiAgICAgICAgICAgICAgICBmaWxlc0RhdGEuc29ydChmdW5jdGlvbihhLCBiKSB7CiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIudmlld3MgLSBhLnZpZXdzOwogICAgICAgICAgICAgICAgfSk7CgogICAgICAgICAgICAgICAgLy8gVGFtcGlsa2FuIGZpbGUgZGFsYW0gdGFiZWwgc2V0ZWxhaCBwZW5ndXJ1dGFuCiAgICAgICAgICAgICAgICBkaXNwbGF5RmlsZXNJblRhYmxlKGZpbGVzRGF0YSk7CiAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgIC8vIFRhbXBpbGthbiB0b3RhbCBmaWxlIHlhbmcgdGVsYWggZGl1cGxvYWQKICAgICAgICAgICAgICAgIGRpc3BsYXlUb3RhbEZpbGVzKGZpbGVzRGF0YS5sZW5ndGgpOwogICAgICAgICAgICB9KTsKICAgICAgICB9KTsKICAgIH0pOwp9OwoKLy8gRnVuZ3NpIHVudHVrIG1lbmFtcGlsa2FuIGp1bWxhaCB0b3RhbCBmaWxlIHlhbmcgdGVsYWggZGl1cGxvYWQKZnVuY3Rpb24gZGlzcGxheVRvdGFsRmlsZXModG90YWxGaWxlcykgewogICAgdmFyIHRvdGFsRmlsZXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsLWZpbGVzJyk7CiAgICB0b3RhbEZpbGVzRWxlbWVudC5pbm5lclRleHQgPSAnVG90YWwgRmlsZSBVcGxvYWRlZDogJyArIHRvdGFsRmlsZXM7Cn0KCmNvbnN0IHRhcmdldERvbWFpbiA9ICdhbm9ueW1vdXMuaGF4b3JhaS5jb20nOwoKZnVuY3Rpb24gY3JlYXRlQWxlcnRCb3gobWVzc2FnZSkgewogIGNvbnN0IGFsZXJ0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7CiAgYWxlcnRCb3guc2V0QXR0cmlidXRlKCdpZCcsICdhbGVydEJveCcpOwogIGFsZXJ0Qm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJzsKICBhbGVydEJveC5zdHlsZS50b3AgPSAnNTBweCc7CiAgYWxlcnRCb3guc3R5bGUubGVmdCA9ICc1MCUnOwogIGFsZXJ0Qm94LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC01MCUpJzsKICBhbGVydEJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YyZjJmMic7CiAgYWxlcnRCb3guc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCAjZGRkJzsKICBhbGVydEJveC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNXB4JzsKICBhbGVydEJveC5zdHlsZS5wYWRkaW5nID0gJzIwcHgnOwogIGFsZXJ0Qm94LnN0eWxlLmJveFNoYWRvdyA9ICcwIDJweCA0cHggcmdiYSgwLDAsMCwwLjIpJzsKICBhbGVydEJveC5zdHlsZS56SW5kZXggPSAnOTk5OSc7CiAgYWxlcnRCb3guaW5uZXJIVE1MID0gYDxzdHJvbmc+UEVSSU5HQVRBTiE8L3N0cm9uZz4gJHttZXNzYWdlfWA7CiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhbGVydEJveCk7CgogIHNldFRpbWVvdXQoKCkgPT4gewogICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChhbGVydEJveCk7CiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdodHRwczovL2Fub255bW91cy5oYXhvcmFpLmNvbSc7CiAgfSwgMTAwMDApOwp9Cgpjb25zdCBjdXJyZW50RG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lOwoKaWYgKGN1cnJlbnREb21haW4gIT09IHRhcmdldERvbWFpbikgewogIGNyZWF0ZUFsZXJ0Qm94KCdTdW1iZXIgRGF5YSBJbmkgRGlhbWFua2FuIE9sZWggQWhsaSBLZWFtYW5hbi4gRGlsYXJhbmcgTWVuZ2Frc2VzIFRhbnBhIEl6aW4uJyk7Cn0=';

function runDecryptedCode(encryptedCode) {
    const decodedCode = atob(encryptedCode);
    eval(decodedCode);
}

runDecryptedCode(encryptedCode);