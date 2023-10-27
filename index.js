const encryptedCode = 'Ly8gS29uZmlndXJhc2kgRmlyZWJhc2UgKHNlc3VhaWthbiBkZW5nYW4gcHJveWVrIEZpcmViYXNlIEFuZGEpDQp2YXIgZmlyZWJhc2VDb25maWcgPSB7DQogICAgYXBpS2V5OiAiQUl6YVN5Qml5ZU93YlFlV215TDYxTXJDUVM0U2pFbEFDcUI2SzhFIiwNCiAgICBhdXRoRG9tYWluOiAiYW5vbnltb3VzY29kZS5maXJlYmFzZWFwcC5jb20iLA0KICAgIHByb2plY3RJZDogImFub255bW91c2NvZGUiLA0KICAgIHN0b3JhZ2VCdWNrZXQ6ICJhbm9ueW1vdXNjb2RlLmFwcHNwb3QuY29tIiwNCiAgICBtZXNzYWdpbmdTZW5kZXJJZDogIjE3MDQ4NjE3NjQ2NiIsDQogICAgYXBwSWQ6ICIxOjE3MDQ4NjE3NjQ2Njp3ZWI6YzEzOTE4NWMzYmVkNTA3NDU2YWIwYiINCn07DQoNCi8vIEluaXNpYWxpc2FzaSBGaXJlYmFzZQ0KZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7DQoNCi8vIEluaXNpYWxpc2FzaSBGaXJlYmFzZSBTdG9yYWdlDQp2YXIgc3RvcmFnZSA9IGZpcmViYXNlLnN0b3JhZ2UoKTsNCnZhciBzdG9yYWdlUmVmID0gc3RvcmFnZS5yZWYoKTsNCg0KLy8gSW5pc2lhbGlzYXNpIEZpcmViYXNlIFJlYWx0aW1lIERhdGFiYXNlDQp2YXIgZGF0YWJhc2UgPSBmaXJlYmFzZS5kYXRhYmFzZSgpOw0KdmFyIGZpbGVzUmVmID0gZGF0YWJhc2UucmVmKCdodG1sLWZpbGVzJyk7DQoNCi8vIEluaXNpYWxpc2FzaSBhcnJheSB1bnR1ayBtZW55aW1wYW4gZGF0YSBmaWxlDQp2YXIgZmlsZXNEYXRhID0gW107DQoNCi8vIEZ1bmdzaSB1bnR1ayBtZW5kYXBhdGthbiB0YW5nZ2FsIHRlcmFraGlyIGthbGkgZGltb2RpZmlrYXNpIGRhcmkgRmlyZWJhc2UgU3RvcmFnZQ0KZnVuY3Rpb24gZ2V0TGFzdE1vZGlmaWVkKGZpbGVOYW1lKSB7DQogICAgcmV0dXJuIHN0b3JhZ2VSZWYuY2hpbGQoJ2h0bWwtZmlsZXMvJyArIGZpbGVOYW1lKS5nZXRNZXRhZGF0YSgpLnRoZW4oZnVuY3Rpb24obWV0YWRhdGEpIHsNCiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKG1ldGFkYXRhLnVwZGF0ZWQpOw0KICAgIH0pOw0KfQ0KDQovLyBQYW5nZ2lsIGZ1bmdzaSBkaXNwbGF5RmlsZXNJblRhYmxlIHNhYXQgaGFsYW1hbiBkaW11YXQNCndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7DQogICAgLy8gRGFwYXRrYW4gZGFmdGFyIGZpbGUgZGFyaSBGaXJlYmFzZSBSZWFsdGltZSBEYXRhYmFzZSBkYW4gdXJ1dGthbiBiZXJkYXNhcmthbiB2aWV3cyBzZWNhcmEgZGVzY2VuZGluZw0KICAgIGZpbGVzUmVmLm9yZGVyQnlDaGlsZCgndmlld3MnKS5vbigndmFsdWUnLCBmdW5jdGlvbiAoc25hcHNob3QpIHsNCiAgICAgICAgLy8gUmVzZXQgZGF0YSBmaWxlIHNlYmVsdW0gbWVuYW1iYWhrYW5ueWEga2VtYmFsaQ0KICAgICAgICBmaWxlc0RhdGEgPSBbXTsNCg0KICAgICAgICAvLyBJdGVyYXRlIG1lbGFsdWkgc2V0aWFwIGZpbGUgZGFyaSBGaXJlYmFzZSBSZWFsdGltZSBEYXRhYmFzZQ0KICAgICAgICBzbmFwc2hvdC5mb3JFYWNoKGZ1bmN0aW9uKGNoaWxkU25hcHNob3QpIHsNCiAgICAgICAgICAgIHZhciBmaWxlRGF0YSA9IGNoaWxkU25hcHNob3QudmFsKCk7DQogICAgICAgICAgICB2YXIgZmlsZU5hbWUgPSBmaWxlRGF0YS5uYW1lOw0KICAgICAgICAgICAgdmFyIGZpbGVVUkwgPSBmaWxlRGF0YS51cmw7DQogICAgICAgICAgICB2YXIgZmlsZVNpemUgPSBmaWxlRGF0YS5zaXplOw0KICAgICAgICAgICAgdmFyIHZpZXdzID0gZmlsZURhdGEudmlld3MgfHwgMDsNCg0KICAgICAgICAgICAgLy8gRGFwYXRrYW4gdGFuZ2dhbCB0ZXJha2hpciBrYWxpIGRpbW9kaWZpa2FzaSBkYXJpIEZpcmViYXNlIFN0b3JhZ2UNCiAgICAgICAgICAgIGdldExhc3RNb2RpZmllZChmaWxlTmFtZSkudGhlbihmdW5jdGlvbihsYXN0TW9kaWZpZWQpIHsNCiAgICAgICAgICAgICAgICAvLyBGb3JtYXQgdGFuZ2dhbCB0ZXJha2hpciBrYWxpIGRpbW9kaWZpa2FzaQ0KICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWRMYXN0TW9kaWZpZWQgPSBsYXN0TW9kaWZpZWQudG9Mb2NhbGVEYXRlU3RyaW5nKHVuZGVmaW5lZCwgew0KICAgICAgICAgICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsDQogICAgICAgICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsDQogICAgICAgICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLA0KICAgICAgICAgICAgICAgICAgICBob3VyOiAnMi1kaWdpdCcsDQogICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLA0KICAgICAgICAgICAgICAgICAgICBzZWNvbmQ6ICcyLWRpZ2l0JywNCiAgICAgICAgICAgICAgICAgICAgdGltZVpvbmVOYW1lOiAnc2hvcnQnDQogICAgICAgICAgICAgICAgfSk7DQoNCiAgICAgICAgICAgICAgICAvLyBUYW1iYWhrYW4gaW5mb3JtYXNpIGZpbGUga2UgZGFsYW0gYXJyYXkNCiAgICAgICAgICAgICAgICBmaWxlc0RhdGEucHVzaCh7DQogICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGVOYW1lLA0KICAgICAgICAgICAgICAgICAgICB1cmw6IGZpbGVVUkwsDQogICAgICAgICAgICAgICAgICAgIHNpemU6IGZpbGVTaXplLA0KICAgICAgICAgICAgICAgICAgICB2aWV3czogdmlld3MsDQogICAgICAgICAgICAgICAgICAgIGxhc3RNb2RpZmllZDogZm9ybWF0dGVkTGFzdE1vZGlmaWVkDQogICAgICAgICAgICAgICAgfSk7DQoNCiAgICAgICAgICAgICAgICAvLyBVcnV0a2FuIGZpbGVzRGF0YSBiZXJkYXNhcmthbiB2aWV3cyBzZWNhcmEgZGVzY2VuZGluZw0KICAgICAgICAgICAgICAgIGZpbGVzRGF0YS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGIudmlld3MgLSBhLnZpZXdzOw0KICAgICAgICAgICAgICAgIH0pOw0KDQogICAgICAgICAgICAgICAgLy8gVGFtcGlsa2FuIGZpbGUgZGFsYW0gdGFiZWwgc2V0ZWxhaCBwZW5ndXJ1dGFuDQogICAgICAgICAgICAgICAgZGlzcGxheUZpbGVzSW5UYWJsZShmaWxlc0RhdGEpOw0KICAgICAgICAgICAgfSk7DQogICAgICAgIH0pOw0KICAgIH0pOw0KfTsNCg0KLy8gRnVuZ3NpIHVudHVrIG1lbmFtYmFoa2FuIGluZm9ybWFzaSBmaWxlIGtlIGRhbGFtIHRhYmVsDQpmdW5jdGlvbiBhZGRGaWxlVG9UYWJsZShmaWxlTmFtZSwgZmlsZVVSTCwgZmlsZVNpemUsIHZpZXdzLCBsYXN0TW9kaWZpZWQpIHsNCiAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS10YWJsZScpOw0KICAgIHZhciBuZXdSb3cgPSB0YWJsZS5pbnNlcnRSb3coKTsNCiAgICB2YXIgY2VsbDEgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgwKTsNCiAgICB2YXIgY2VsbDIgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgxKTsNCiAgICB2YXIgY2VsbDMgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgyKTsNCiAgICB2YXIgY2VsbDQgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgzKTsNCiAgICB2YXIgY2VsbDUgPSBuZXdSb3cuaW5zZXJ0Q2VsbCg0KTsNCg0KICAgIGNlbGwxLmlubmVySFRNTCA9IGZpbGVOYW1lOw0KICAgIGNlbGwyLmlubmVySFRNTCA9IGZpbGVTaXplOw0KICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpOw0KICAgIGxpbmsuaHJlZiA9IGZpbGVVUkw7DQogICAgbGluay50YXJnZXQgPSAnX2JsYW5rJzsNCiAgICBsaW5rLnRleHRDb250ZW50ID0gJ09wZW4nOw0KICAgIGNlbGwzLmFwcGVuZENoaWxkKGxpbmspOw0KICAgIGNlbGw0LmlubmVySFRNTCA9IHZpZXdzOw0KDQogICAgLy8gVGFtcGlsa2FuIHRhbmdnYWwgdGVyYWtoaXIga2FsaSBkaW1vZGlmaWthc2kNCiAgICBjZWxsNS5pbm5lckhUTUwgPSBsYXN0TW9kaWZpZWQ7DQoNCiAgICAvLyBUYW1iYWhrYW4gZXZlbnQgbGlzdGVuZXIgdW50dWsgbWVuZ2hpdHVuZyBqdW1sYWgga2xpaw0KICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHsNCiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsNCiAgICAgICAgdmFyIGNsaWNrZWRGaWxlTmFtZSA9IGZpbGVOYW1lOw0KDQogICAgICAgIGZpbGVzUmVmLm9yZGVyQnlDaGlsZCgnbmFtZScpLmVxdWFsVG8oY2xpY2tlZEZpbGVOYW1lKS5vbmNlKCd2YWx1ZScsIGZ1bmN0aW9uIChzbmFwc2hvdCkgew0KICAgICAgICAgICAgaWYgKHNuYXBzaG90LmV4aXN0cygpKSB7DQogICAgICAgICAgICAgICAgdmFyIGZpbGVLZXkgPSBPYmplY3Qua2V5cyhzbmFwc2hvdC52YWwoKSlbMF07DQogICAgICAgICAgICAgICAgdmFyIHZpZXdDb3VudCA9IChzbmFwc2hvdC52YWwoKVtmaWxlS2V5XS52aWV3cyB8fCAwKSArIDE7DQoNCiAgICAgICAgICAgICAgICAvLyBTaW1wYW4ganVtbGFoIHZpZXdzIHlhbmcgdGVsYWggZGl0aW5na2F0a2FuIGtlbWJhbGkga2UgRmlyZWJhc2UgUmVhbHRpbWUgRGF0YWJhc2UNCiAgICAgICAgICAgICAgICBmaWxlc1JlZi5jaGlsZChmaWxlS2V5KS51cGRhdGUoeyB2aWV3czogdmlld0NvdW50IH0pLnRoZW4oZnVuY3Rpb24gKCkgew0KICAgICAgICAgICAgICAgICAgICAvLyBQZXJiYXJ1aSB0YW1waWxhbiBqdW1sYWggdmlld3MNCiAgICAgICAgICAgICAgICAgICAgY2VsbDQudGV4dENvbnRlbnQgPSB2aWV3Q291bnQ7DQoNCiAgICAgICAgICAgICAgICAgICAgLy8gUmVmcmVzaCBoYWxhbWFuIHNhYXQganVtbGFoIHZpZXdzIHRlbGFoIGRpcGVyYmFydWkNCiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7DQogICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihsaW5rLmhyZWYsICdfYmxhbmsnKTsgLy8gQnVrYSB0YXV0YW4gZGFsYW0gdGFiIGJhcnUNCiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOyAvLyBSZWxvYWQgaGFsYW1hbg0KICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTsNCiAgICAgICAgICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHsNCiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgdmlld3M6JywgZXJyb3IpOw0KICAgICAgICAgICAgICAgIH0pOw0KICAgICAgICAgICAgfQ0KICAgICAgICB9KTsNCiAgICB9KTsNCn0NCg0KLy8gRnVuZ3NpIHVudHVrIG1lbmFtcGlsa2FuIGZpbGUgZGFsYW0gdGFiZWwNCmZ1bmN0aW9uIGRpc3BsYXlGaWxlc0luVGFibGUoZmlsZXNEYXRhKSB7DQogICAgdmFyIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbGUtdGFibGUnKTsNCiAgICAvLyBLb3NvbmdrYW4gdGFiZWwgc2ViZWx1bSBtZW5hbWJhaGthbiBkYXRhIGJhcnUNCiAgICB0YWJsZS5pbm5lckhUTUwgPSAnJzsNCg0KICAgIC8vIFRhbWJhaGthbiBqdWR1bCBrb2xvbQ0KICAgIHZhciB0aGVhZCA9IHRhYmxlLmNyZWF0ZVRIZWFkKCk7DQogICAgdmFyIHJvdyA9IHRoZWFkLmluc2VydFJvdygpOw0KICAgIHZhciBjZWxsMSA9IHJvdy5pbnNlcnRDZWxsKDApOw0KICAgIHZhciBjZWxsMiA9IHJvdy5pbnNlcnRDZWxsKDEpOw0KICAgIHZhciBjZWxsMyA9IHJvdy5pbnNlcnRDZWxsKDIpOw0KICAgIHZhciBjZWxsNCA9IHJvdy5pbnNlcnRDZWxsKDMpOw0KICAgIHZhciBjZWxsNSA9IHJvdy5pbnNlcnRDZWxsKDQpOw0KICAgIGNlbGwxLmlubmVySFRNTCA9ICc8Yj5GaWxlIE5hbWU8L2I+JzsNCiAgICBjZWxsMi5pbm5lckhUTUwgPSAnPGI+U2l6ZTwvYj4nOw0KICAgIGNlbGwzLmlubmVySFRNTCA9ICc8Yj5MaW5rPC9iPic7DQogICAgY2VsbDQuaW5uZXJIVE1MID0gJzxiPlZpZXdzPC9iPic7DQogICAgY2VsbDUuaW5uZXJIVE1MID0gJzxiPlVwZGF0ZTwvYj4nOw0KDQogICAgLy8gVGFtYmFoa2FuIGRhdGEgZmlsZSBrZSBkYWxhbSB0YWJlbA0KICAgIGZpbGVzRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGZpbGVEYXRhKSB7DQogICAgICAgIGFkZEZpbGVUb1RhYmxlKGZpbGVEYXRhLm5hbWUsIGZpbGVEYXRhLnVybCwgZmlsZURhdGEuc2l6ZSwgZmlsZURhdGEudmlld3MsIGZpbGVEYXRhLmxhc3RNb2RpZmllZCk7DQogICAgfSk7DQp9DQoNCi8vIEZ1bmdzaSB1bnR1ayBtZW5jYXJpIGZpbGUgYmVyZGFzYXJrYW4gbmFtYQ0KZnVuY3Rpb24gc2VhcmNoRmlsZXNCeU5hbWUoZmlsZXNEYXRhLCBzZWFyY2hUZXJtKSB7DQogICAgcmV0dXJuIGZpbGVzRGF0YS5maWx0ZXIoZnVuY3Rpb24gKGZpbGVEYXRhKSB7DQogICAgICAgIHJldHVybiBmaWxlRGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoVGVybS50b0xvd2VyQ2FzZSgpKTsNCiAgICB9KTsNCn0NCg0KLy8gVGFuZ2FuaSBwZXJ1YmFoYW4gcGFkYSBpbnB1dCBwZW5jYXJpYW4NCmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2gtaW5wdXQnKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHsNCiAgICB2YXIgc2VhcmNoVGVybSA9IHRoaXMudmFsdWUudHJpbSgpOw0KICAgIHZhciBmaWx0ZXJlZEZpbGVzID0gc2VhcmNoRmlsZXNCeU5hbWUoZmlsZXNEYXRhLCBzZWFyY2hUZXJtKTsNCiAgICBkaXNwbGF5RmlsZXNJblRhYmxlKGZpbHRlcmVkRmlsZXMpOw0KfSk7DQoNCi8vIFRhbmdhbmkgcGVuZ3VuZ2dhaGFuIGZpbGUga2V0aWthIGZvcm11bGlyIGRpLXN1Ym1pdA0KZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwbG9hZC1mb3JtJykuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24gKGUpIHsNCiAgICBlLnByZXZlbnREZWZhdWx0KCk7DQogICAgdmFyIGZpbGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodG1sLWZpbGUnKTsNCiAgICB2YXIgZmlsZSA9IGZpbGVJbnB1dC5maWxlc1swXTsNCg0KICAgIC8vIFBlcmlrc2EgYXBha2FoIHBlbmdndW5hIHRlbGFoIG1lbWlsaWggZmlsZQ0KICAgIGlmICghZmlsZSkgew0KICAgICAgICBzaG93Tm90aWZpY2F0aW9uKCdBbmRhIGJlbHVtIG1lbWlsaWggZmlsZSB1bnR1ayBkaXVuZ2dhaC4nKTsNCiAgICAgICAgcmV0dXJuOw0KICAgIH0NCg0KICAgIC8vIFRhbXBpbGthbiBhbmltYXNpIGxvYWRpbmcgc2ViZWx1bSBtZW5ndW5nZ2FoDQogICAgc2hvd0xvYWRpbmdBbmltYXRpb24oKTsNCg0KICAgIC8vIFNpbXBhbiBmaWxlIEhUTUwga2UgRmlyZWJhc2UgU3RvcmFnZQ0KICAgIHZhciB1cGxvYWRUYXNrID0gc3RvcmFnZVJlZi5jaGlsZCgnaHRtbC1maWxlcy8nICsgZmlsZS5uYW1lKS5wdXQoZmlsZSk7DQoNCiAgICB1cGxvYWRUYXNrLm9uKCdzdGF0ZV9jaGFuZ2VkJywNCiAgICAgICAgZnVuY3Rpb24gcHJvZ3Jlc3Moc25hcHNob3QpIHsNCiAgICAgICAgICAgIHZhciBwZXJjZW50YWdlID0gKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDsNCiAgICAgICAgICAgIC8vIFBlcmJhcnVpIHBlcnNlbnRhc2UgZGkgYW5pbWFzaSBsb2FkaW5nDQogICAgICAgICAgICB2YXIgbG9hZGluZ1BlcmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1wZXJjZW50Jyk7DQogICAgICAgICAgICBsb2FkaW5nUGVyY2VudC5pbm5lclRleHQgPSBwZXJjZW50YWdlLnRvRml4ZWQoMikgKyAnJSc7DQogICAgICAgIH0sDQogICAgICAgIGZ1bmN0aW9uIGVycm9yKGVycm9yKSB7DQogICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB1cGxvYWRpbmcgZmlsZTonLCBlcnJvcik7DQogICAgICAgICAgICAvLyBTZW1idW55aWthbiBhbmltYXNpIGppa2EgdGVyamFkaSBrZXNhbGFoYW4NCiAgICAgICAgICAgIGhpZGVMb2FkaW5nQW5pbWF0aW9uKCk7DQogICAgICAgIH0sDQogICAgICAgIGZ1bmN0aW9uIGNvbXBsZXRlKCkgew0KICAgICAgICAgICAgLy8gRmlsZSBiZXJoYXNpbCBkaXVuZ2dhaCwgQW5kYSBkYXBhdCBtZW5hbWJhaGthbm55YSBrZSBkYXRhYmFzZSBhdGF1IG1lbmdhbWJpbCBVUkwNCiAgICAgICAgICAgIC8vIGxhbHUgbWVuYW1waWxrYW5ueWEgZGFsYW0gdGFiZWwNCg0KICAgICAgICAgICAgLy8gRGFwYXRrYW4gVVJMIGZpbGUgeWFuZyBkaXVuZ2dhaA0KICAgICAgICAgICAgdXBsb2FkVGFzay5zbmFwc2hvdC5yZWYuZ2V0RG93bmxvYWRVUkwoKS50aGVuKGZ1bmN0aW9uIChkb3dubG9hZFVSTCkgew0KICAgICAgICAgICAgICAgIC8vIENlayBhcGFrYWggZmlsZSBkZW5nYW4gbmFtYSB5YW5nIHNhbWEgc3VkYWggYWRhIGRpIEZpcmViYXNlIFJlYWx0aW1lIERhdGFiYXNlDQogICAgICAgICAgICAgICAgZmlsZXNSZWYub3JkZXJCeUNoaWxkKCduYW1lJykuZXF1YWxUbyhmaWxlLm5hbWUpLm9uY2UoJ3ZhbHVlJywgZnVuY3Rpb24gKHNuYXBzaG90KSB7DQogICAgICAgICAgICAgICAgICAgIGlmICghc25hcHNob3QuZXhpc3RzKCkpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1lbmd1a3VyIHVrdXJhbiBmaWxlDQogICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZVNpemUgPSBmb3JtYXRCeXRlcyhmaWxlLnNpemUpOw0KDQogICAgICAgICAgICAgICAgICAgICAgICAvLyBKaWthIGJlbHVtIGFkYSwgdGFtYmFoa2FuIGluZm9ybWFzaSBmaWxlIGtlIEZpcmViYXNlIFJlYWx0aW1lIERhdGFiYXNlDQogICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZURhdGEgPSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5uYW1lLA0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogZG93bmxvYWRVUkwsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogZmlsZVNpemUsDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld3M6IDAgLy8gSW5pc2lhbGlzYXNpIGp1bWxhaCB2aWV3cyBrZSAwDQogICAgICAgICAgICAgICAgICAgICAgICB9Ow0KICAgICAgICAgICAgICAgICAgICAgICAgZmlsZXNSZWYucHVzaChmaWxlRGF0YSkudGhlbihmdW5jdGlvbiAoKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VtYnVueWlrYW4gYW5pbWFzaSBsb2FkaW5nDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxvYWRpbmdBbmltYXRpb24oKTsNCg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRhbXBpbGthbiBub3RpZmlrYXNpDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbignRmlsZSBiZXJoYXNpbCBkaXVuZ2dhaCBkYW4gZGFwYXQgZGljYXJpIGJlcmRhc2Fya2FuIG5hbWEgZmlsZS4nKTsNCg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbG9hZCBoYWxhbWFuIHNldGVsYWggbm90aWZpa2FzaSBkaXR1dHVwDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpOw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApOw0KICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgYWRkaW5nIGZpbGUgZGF0YTonLCBlcnJvcik7DQogICAgICAgICAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbWJ1bnlpa2FuIGFuaW1hc2kgbG9hZGluZw0KICAgICAgICAgICAgICAgICAgICAgICAgaGlkZUxvYWRpbmdBbmltYXRpb24oKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRhbXBpbGthbiBub3RpZmlrYXNpDQogICAgICAgICAgICAgICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKCdGaWxlIGRlbmdhbiBuYW1hIHlhbmcgc2FtYSBzdWRhaCBhZGEuJyk7DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgIH0pOw0KICAgICAgICB9DQogICAgKTsNCn0pOw0KDQovLyBGdW5nc2kgdW50dWsgbWVuYW1waWxrYW4gbm90aWZpa2FzaQ0KZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlKSB7DQogICAgdmFyIG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24nKTsNCiAgICB2YXIgbm90aWZpY2F0aW9uTWVzc2FnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub3RpZmljYXRpb24tbWVzc2FnZScpOw0KICAgIHZhciBub3RpZmljYXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm90aWZpY2F0aW9uLWJ1dHRvbicpOw0KICAgIG5vdGlmaWNhdGlvbk1lc3NhZ2UuaW5uZXJUZXh0ID0gbWVzc2FnZTsNCiAgICBub3RpZmljYXRpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7DQoNCiAgICBub3RpZmljYXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7DQogICAgICAgIG5vdGlmaWNhdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOw0KICAgIH0pOw0KfQ0KDQovLyBUYW1waWxrYW4gYW5pbWFzaSBsb2FkaW5nDQpmdW5jdGlvbiBzaG93TG9hZGluZ0FuaW1hdGlvbigpIHsNCiAgICB2YXIgbG9hZGluZ0FuaW1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLWFuaW1hdGlvbicpOw0KICAgIGxvYWRpbmdBbmltYXRpb24uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7DQoNCiAgICAvLyBSZXNldCBuaWxhaSBwZXJzZW50YXNlDQogICAgY3VycmVudFByb2dyZXNzID0gMDsNCiAgICB2YXIgbG9hZGluZ1BlcmNlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGluZy1wZXJjZW50Jyk7DQogICAgbG9hZGluZ1BlcmNlbnQuaW5uZXJUZXh0ID0gJzAlJzsNCg0KICAgIC8vIEphbGFua2FuIGZ1bmdzaSB1cGRhdGVQcm9ncmVzcyBzZXRpYXAgNDBtcyB1bnR1ayBtZW5ndXBkYXRlIHBlcnNlbnRhc2UNCiAgICB2YXIgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKHVwZGF0ZVByb2dyZXNzLCA0MCk7DQoNCiAgICAvLyBGdW5nc2kgdW50dWsgbWVuZ3VwZGF0ZSBwZXJzZW50YXNlDQogICAgZnVuY3Rpb24gdXBkYXRlUHJvZ3Jlc3MoKSB7DQogICAgICAgIGN1cnJlbnRQcm9ncmVzcyArPSAxOw0KICAgICAgICBpZiAoY3VycmVudFByb2dyZXNzIDw9IDEwMCkgew0KICAgICAgICAgICAgbG9hZGluZ1BlcmNlbnQuaW5uZXJUZXh0ID0gY3VycmVudFByb2dyZXNzICsgJyUnOw0KICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTsNCiAgICAgICAgfQ0KICAgIH0NCn0NCg0KLy8gU2VtYnVueWlrYW4gYW5pbWFzaSBsb2FkaW5nDQpmdW5jdGlvbiBoaWRlTG9hZGluZ0FuaW1hdGlvbigpIHsNCiAgICB2YXIgbG9hZGluZ0FuaW1hdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkaW5nLWFuaW1hdGlvbicpOw0KICAgIGxvYWRpbmdBbmltYXRpb24uc3R5bGUuZGlzcGxheSA9ICdub25lJzsNCn0NCg0KLy8gRnVuZ3NpIHVudHVrIG1lbmd1a3VyIHVrdXJhbiBmaWxlDQpmdW5jdGlvbiBmb3JtYXRCeXRlcyhieXRlcywgZGVjaW1hbHMgPSAyKSB7DQogICAgaWYgKGJ5dGVzID09PSAwKSByZXR1cm4gJzAgQnl0ZXMnOw0KDQogICAgY29uc3QgayA9IDEwMjQ7DQogICAgY29uc3QgZG0gPSBkZWNpbWFscyA8IDAgPyAwIDogZGVjaW1hbHM7DQogICAgY29uc3Qgc2l6ZXMgPSBbJ0J5dGVzJywgJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ107DQoNCiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7DQoNCiAgICByZXR1cm4gcGFyc2VGbG9hdCgoYnl0ZXMgLyBNYXRoLnBvdyhrLCBpKSkudG9GaXhlZChkbSkpICsgJyAnICsgc2l6ZXNbaV07DQp9DQoNCi8vIEZ1bmdzaSB1bnR1ayB0b21ib2wgYmFjayB0byB0b3AgJiBtZW51IG5hdmlnYXNpDQpsZXQgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7DQpzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnOw0Kc2NyaXB0LnNyYyA9ICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvc2FtdWVscGFzYXJpYnUvYW5vbnltb3VzY29kZS9zY3JpcHQuanMnOw0KZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpLmFwcGVuZENoaWxkKHNjcmlwdCk7DQoNCi8vIEZ1bmdzaSB1bnR1ayBtZW5nYW1iaWwgZmlsZSBjc3MNCmxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpOw0KbGluay50eXBlID0gJ3RleHQvY3NzJzsNCmxpbmsucmVsID0gJ3N0eWxlc2hlZXQnOw0KbGluay5ocmVmID0gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9zYW11ZWxwYXNhcmlidS9hbm9ueW1vdXNjb2RlL3N0eWxlLmNzcyc7DQpkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJykuYXBwZW5kQ2hpbGQobGluayk7DQoNCmNvbnN0IHRhcmdldERvbWFpbiA9ICdhbm9ueW1vdXMuaGF4b3JhaS5jb20nOw0KDQpmdW5jdGlvbiBjcmVhdGVBbGVydEJveChtZXNzYWdlKSB7DQogIGNvbnN0IGFsZXJ0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7DQogIGFsZXJ0Qm94LnNldEF0dHJpYnV0ZSgnaWQnLCAnYWxlcnRCb3gnKTsNCiAgYWxlcnRCb3guc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnOw0KICBhbGVydEJveC5zdHlsZS50b3AgPSAnNTBweCc7DQogIGFsZXJ0Qm94LnN0eWxlLmxlZnQgPSAnNTAlJzsNCiAgYWxlcnRCb3guc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoLTUwJSknOw0KICBhbGVydEJveC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2YyZjJmMic7DQogIGFsZXJ0Qm94LnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI2RkZCc7DQogIGFsZXJ0Qm94LnN0eWxlLmJvcmRlclJhZGl1cyA9ICc1cHgnOw0KICBhbGVydEJveC5zdHlsZS5wYWRkaW5nID0gJzIwcHgnOw0KICBhbGVydEJveC5zdHlsZS5ib3hTaGFkb3cgPSAnMCAycHggNHB4IHJnYmEoMCwwLDAsMC4yKSc7DQogIGFsZXJ0Qm94LnN0eWxlLnpJbmRleCA9ICc5OTk5JzsNCiAgYWxlcnRCb3guaW5uZXJIVE1MID0gYDxzdHJvbmc+UEVSSU5HQVRBTiE8L3N0cm9uZz4gJHttZXNzYWdlfWA7DQogIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYWxlcnRCb3gpOw0KDQogIHNldFRpbWVvdXQoKCkgPT4gew0KICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYWxlcnRCb3gpOw0KICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJ2h0dHBzOi8vYW5vbnltb3VzLmhheG9yYWkuY29tJzsNCiAgfSwgMTAwMDApOw0KfQ0KDQpjb25zdCBjdXJyZW50RG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lOw0KDQppZiAoY3VycmVudERvbWFpbiAhPT0gdGFyZ2V0RG9tYWluKSB7DQogIGNyZWF0ZUFsZXJ0Qm94KCdTdW1iZXIgRGF5YSBJbmkgRGlhbWFua2FuIE9sZWggQWhsaSBLZWFtYW5hbi4gRGlsYXJhbmcgTWVuZ2Frc2VzIFRhbnBhIEl6aW4uJyk7DQp9';

function runDecryptedCode(encryptedCode) {
    const decodedCode = atob(encryptedCode);
    eval(decodedCode);
}

runDecryptedCode(encryptedCode);