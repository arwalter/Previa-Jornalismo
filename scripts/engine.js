logoJornais = new Map();

logoJornais.set('logoBDDF', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABfCAYAAACOTBv1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTMxVDE1OjE0OjQ3LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0zMVQxNTozMDowNy0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0zMVQxNTozMDowNy0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3MzY0YzVhNy1kZjBjLTI1NDYtYTg2MC1iMTBmNjE5ZjZkYjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzM2NGM1YTctZGYwYy0yNTQ2LWE4NjAtYjEwZjYxOWY2ZGI3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NzM2NGM1YTctZGYwYy0yNTQ2LWE4NjAtYjEwZjYxOWY2ZGI3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo3MzY0YzVhNy1kZjBjLTI1NDYtYTg2MC1iMTBmNjE5ZjZkYjciIHN0RXZ0OndoZW49IjIwMjAtMDMtMzFUMTU6MTQ6NDctMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7sYVmLAAAIUElEQVR4nO2cbYxcVRmAn3PuvTOzH7Oz090t2xYotAuorXy01IoJGrQYIRqDNI3GjxSDYPAH6g9NJChGDfoD4scPhEiCxBggCAZUGihUVFpcKLBQSpXW0gXa7ba73d2ZnZk7997z+mPLx7Z052O3e0w8z98557znPve97z333JlRIoLDDtr2BP6fcfIt4uRbxMm3iJNvESffIk6+RZx8izj5FnHyLeLkW8TJt4iTbxEn3yJOvkWcfIs4+RZx8i3i5FvEybeIk28RJ98iTr5FnHyLOPkWcfIt4uRbxMm3iJNvESffIk6+RZx8izj5FnHyLeLkW8TJt4hfq4FSaj7m8TZjE4UfVKP4ptnG1Upt78rnLmy2/3iheE2lGt2uUNDgVMQY0qnUTbls2w9naqdq/RqxXgnx2C4xYy+STLyKVIaQpAoI6ACd7kZn+9C5lQTdF5xwwFf2DMq3fnYnhcky6VRQV9z3QkTQWtPZ0cbKvtO58tKLOPecZTUPpFgq9z64eduBLf072H9whHK1SjPyS5WQMxYv5N5bvjNjz5qZX4vo8HaJBu+n9PRGCPeDVAEN6mhFE0OCAeVD0MPkUxslWHwZ/pLLV+tU9rl3jzUyXuD5V/YSxjGZYDZTU4gIcZLw2NYB7tv0FHc9uFk2XrHuhDL2DO6Xq274BU/88yWMMQS+j9bNVeVipUJxslKzXdNHmJSHpfrqbyj3Xw3VN1FeJ/h5RJ1owoIyFZJDj5IcfgL9xkPbo6EnCXo/9rYQ3/PItrWQjmJSR+VHcYIRQ2PpJygUbX4GrRQjYwW+e+vd3PfI32XDZRcfN9DwyBH56o2/Ykv/Dhbmc3ieJo4TEjHQxM+U075PKvBqtmtKfjwyIOX+6zCjj4PfA6kldcxRIToDqQxKDGbkccpjzxHuvkvSfRuPCpk+SmIMvqcJ/IBGfqutFMSJoViqkAp8OjvaGR0rcMtv/8jrB4bltEULp52AOx/YzF+feZnerk6UUhRLFdKpgLZMuv6g044Ucu2tNds1LD861C/lZ69HyjshvZSGCyJMXR2pJRCPEe78EdV990tq6XqF8nnrBJTDKksXdfP9r2+gK5+jMfsQx4b+Ha9y2z2bKIchHdlWdg8OsXnbwLSmh4+M7f/c9T+lNZ1CKUWpHHLJ2pVc9dl15HNtKEXD2Z+YhPbWlprtGpIfj+2Scv91SPnfU/JmhQG/E+JxwpduQgpPy9Z9bUSxoBRUqxE9+Ryf+uiaWS17bvzl7+S2ezaR62gjEeHl3YPTPt8zOLTozYOjZNIpSpWQU3sXcPM3v8wZS3pnvcyrtZip+45iqoVVlR03I5MvQuqU2c7rrVHBzyHJGLLjJ3Sp11jQ1Us1ilFKkRhDoTi5ajYRVvadju9pxBg8pRidKE77vBRWiRODUoowill2Wu+ciK+HuuVHr/1+uzn0CKQXz/EUDAQ9lIf7OUf+woZLVxMlumbW1D26yLTl8rHjaqXQ6p1bznz+D0hdZScpDkpp61fAywIBYOZ8IsbrQg7+mfUXnM9Df1vOwMsDtTvVwbGyZ3puaWtJs3vfAX7863ulo72VxNR3nEli8LTminVrG7pq6pIf79+ETO48mvVzLx5AdJry5BDLF77Aug+dyzMDcyO/EdKpgJHxIj+/+2GkgbtsFCeICGct7W0oXk35plpYVXr6atAZmlnZNILRHaiJfi55/ypuy3dRroSIsBh4rmbnOUBE8D1Ntq1lqlzV2S9OEhIjDW/F1JSfjO/cLoWdKK+9meeNhhDdQlT4Dx/oHWHZqUuoVAtorZ49yWHfRilFFMdEUdzQ022cJIiA1+ATcU35MvkaEk+g/HxDAzeHohpOktOHueXbnyeJK7S3tQ7NQ2AAypWQ0xZ1840vXE6+ow0zU82Xd7LciKA1rF7R11C82vIrIyDJu2OdVBJR6PAgF685a04i6mNKwUyrqEpY5fRFPXzpM5f8byw1TfUIUzfZ+bGv0EhcmtMx371qmamcKKWQOlc4c0HtIqVqbxDNPXN3orcN/Gvq5qk1xgg9+dyM7efz7/5qlh2dXsDUORLmI/uVAh1keX7XXtn35jCB33hMrTVhGPGP51/hD49uI9vagjGC52kueN+ZJ2HWzVH7TVamB3SAEkGm1U9BiYBEiFRBEpAI5ESXrZ66ipSPUj7oFKI8jj2hvqdJUqdw692P8sBjW1iQrb07eNyclcIYQxjFtLdkCAKPg6PjrFmxnE9cdN6B4zswvyl/lNqZ394HQTfEEyjlIaYMJgRAdCv4WVSwCBV0otLdKC99tFS9JVUAQZIQqY4i0TgSF1DRKMTjUy9fVBrltYLyCVLtDMc9vH5wiJaUj+c190LD0z6ZdApjhEOjE/R0Zvne19bTnc9N2x+Z35ek06kp31/wQVV8coMkw/ehW89DZfvw2pej289Ety9FZRajWxaigo47dDp/7UxjmerEpyWefFjCUaQyjCm9gSnsJhnfiSntRZV34GXX8uxghhd27SGpRrPa4zFG0Fpx7tlLueHa9Xz8w+cf5zqKE46MF4mNUCqXKUyWm47XKHVtL6SWfRHTvRa/5yOo7HK8loVNJYxOdfyJ90g2E45fkxT33m5GtpH4GaqFXtatPZv2TNB0ahojdLS1cOGKPi67eDWndOffc6RTe7u48pMXEVZjwihizYo+Nt3RXMxGqfkC3XHycN/bsYiTbxEn3yJOvkWcfIs4+RZx8i3i5FvEybeIk28RJ98iTr5FnHyLOPkWcfIt4uRbxMm3iJNvESffIk6+RZx8izj5FnHyLeLkW8TJt4iTbxEn3yJOvkWcfIs4+RZx8i3i5FvEybeIk28RJ98i/wVQnRSTQjHiIwAAAABJRU5ErkJggg==');
logoJornais.set('logoDF1', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABfCAYAAACOTBv1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTMxVDE1OjE0OjQ3LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0zMVQxNTozMDo0MC0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0zMVQxNTozMDo0MC0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNTg2YWNjMC1iZDMzLTA1NDEtODIzMC03ZGVhMGYwYjEyYjciIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowZDIyYmY1ZS0zNjhjLTRjNGEtYjM3My1jYmIzYjgzNjA1MjEiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo5ZTdmZWQwMi05M2E0LTlmNDAtYmIzZS04NGIwZTY5NjRkY2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjllN2ZlZDAyLTkzYTQtOWY0MC1iYjNlLTg0YjBlNjk2NGRjYyIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0zMVQxNToxNDo0Ny0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNTg2YWNjMC1iZDMzLTA1NDEtODIzMC03ZGVhMGYwYjEyYjciIHN0RXZ0OndoZW49IjIwMjAtMDMtMzFUMTU6MzA6NDAtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7oZfcPAAAIn0lEQVR4nO2ce4xcVR2Av3PuvfPc2e1uu33RFqwULLSldZXWojSBUCwBCa9oJEIjpo0aEgqEkPAPCYmkIooaElvAgppgSFCgIEqqWEO1VlppC8W+gWIp3Xa7s7OzO3Nfxz9mZ9zpzHbnzhAOxvNNbrJz557f+c13z+PeMzsjlFIY9CB1J/D/jJGvESNfI0a+Rox8jRj5GjHyNWLka8TI14iRrxEjXyNGvkaMfI0Y+Rox8jVi5GvEyNeIka8RI18jRr5GjHyNGPkaMfI1YuRrxMjX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');
logoJornais.set('logoGE', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABfCAYAAACOTBv1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTMxVDE1OjE0OjQ3LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0zMVQxNTozMToxMS0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0zMVQxNTozMToxMS0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0ZGJjMzY0ZC00ZDJiLTFmNGEtYWQ3Mi03NjdiYTMyNDRjMTEiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3ODBhODEzMi1jMTA1LTAwNDQtOTI4Mi1kZGVkNjNmMTY2ZmIiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpmNTcyODQ4MC0zYjIzLTgxNDEtYTdkNC1jZjQyN2ZlMjdjM2MiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmY1NzI4NDgwLTNiMjMtODE0MS1hN2Q0LWNmNDI3ZmUyN2MzYyIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0zMVQxNToxNDo0Ny0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZGJjMzY0ZC00ZDJiLTFmNGEtYWQ3Mi03NjdiYTMyNDRjMTEiIHN0RXZ0OndoZW49IjIwMjAtMDMtMzFUMTU6MzE6MTEtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4iPhUtAAAf+ElEQVR4nO2ceZRdV3Wnv33OuffNNalUkkqSy5I8SR4AGxsbzJCACUMagplZgYQMrKzukIAJAZyExlkhdrMAN0OnE8giaSAJkMZAB0hwMATHWAY8YlvYlmWNVSWpqvSqXr16793hnN1/vCq5Jg90r9X1R9dvrbe06tWte875zr777LPPvhJVZV1rI7PWHfj/Wevw11Dr8NdQ6/DXUOvw11Dr8NdQ6/DXUOvw11Dr8NdQ6/DXUOvw11Dr8NdQ6/DXUOvw11Dr8NdQ6/DXUOvw11Dr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');
logoJornais.set('logoDF2', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABfCAYAAACOTBv1AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF8WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0MzUyLCAyMDIwLzAxLzMwLTE1OjUwOjM4ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjEuMSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTMxVDE1OjE0OjQ3LTAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wMy0zMVQxNTozMTozMy0wMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wMy0zMVQxNTozMTozMy0wMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMWYxZjQ3ZC01YzIzLTAzNDktOTQ1Yy05ODQwZTIzYWE0MzkiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo5NzU1NzllYi03MDg5LTA4NDctOWJlNS1kOGYyZWQ1NjAwMzAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMGViZWNlNS00OWU3LTMxNGUtYjcxZi0xMzdhNGE4NDkwZTMiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmUwZWJlY2U1LTQ5ZTctMzE0ZS1iNzFmLTEzN2E0YTg0OTBlMyIgc3RFdnQ6d2hlbj0iMjAyMC0wMy0zMVQxNToxNDo0Ny0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMWYxZjQ3ZC01YzIzLTAzNDktOTQ1Yy05ODQwZTIzYWE0MzkiIHN0RXZ0OndoZW49IjIwMjAtMDMtMzFUMTU6MzE6MzMtMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4M+pS1AAAKBUlEQVR4nO2ceWxcxR2Av3nHnl7biUm8iZ04SmLA1Ak5oBCOkjaUcqqQUihVoEBFqOghWoFKCwQiIQFVW3rRCtQIlYLaJoAoVyQSCgmtCyEOCSaQYOxcdnzFiY+193rvTf9Y2/hYO7sO0fzR+awnrffN9b75zcx7s14LKSUaNRiqG/D/jJavEC1fIVq+QrR8hWj5CtHyFaLlK0TLV4iWrxAtXyFavkK0fIVo+QrR8hWi5StEy1eIlq8QLV8hWr5CtHyFaPkK0fIVouUrRMtXiJav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');
logoJornais.set('logoGCO', 'data:image/jpeg;base64,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');


let date = "";
let startEndTime = "";
let audReceived = "";
let audDelivered = "";
let glo = 0;
let sglo = 0;
let rec = 0;
let srec = 0;
let sbt = 0;
let ssbt = 0;
let ban = 0;
let sban = 0;
let rtv = 0;
let srtv = 0;
let tle = 0;
let stle = 0;
let time = [];
let audGLO = [];
let audREC = [];
let audSBT = [];
let audBAN = [];
let audRTV = [];
let audTLE = [];
let maxTLE = [];
let maxInterval = 0;
let intervals = [];



function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

let jornal = localStorage.getItem('jornal');
let csv = localStorage.getItem('file');
let intervalsArray = JSON.parse(localStorage.getItem('intervals'));

document.getElementById('imgJornal').src = logoJornais.get('logo' + jornal);

let allTextLines = csv.split('\n');
for (let row = allTextLines.length - 2; row > 8; row--) { 
    const cols = allTextLines[row].split(';');
    time.push(cols[0]);
    audGLO.push(cols[2] == "-" ? "0" : cols[2].replace(",", "."));
    audREC.push(cols[3] == "-" ? "0" : cols[3].replace(",", "."));
    audSBT.push(cols[4] == "-" ? "0" : cols[4].replace(",", "."));
    audBAN.push(cols[5] == "-" ? "0" : cols[5].replace(",", "."));
    audRTV.push(cols[6] == "-" ? "0" : cols[6].replace(",", "."));
    audTLE.push(cols[7] == "-" ? "0" : cols[7].replace(",", "."));
    maxTLE.push(parseFloat(cols[7] == "-" ? "0" : cols[7].replace(",", ".")));

}

maxInterval = Math.max(...maxTLE) + 1;
flag = 0;

for (let index = 0; index < time.length; index++) {
    if(intervalsArray.includes(time[index])){
        if(flag == 0){
            flag = 1;
            intervals.push(flag);
            continue;
        }else{
            intervals.push(flag);
            flag = 0;
            continue;
        }
    }
    intervals.push(flag);
}

intervals.forEach((element, index) => {
    if(element !== 0){
        intervals[index] = maxInterval;
    }
});

date = allTextLines[6].substr(0, 10).replace(/-/g, '/');
startEndTime = allTextLines[6].substr(11, 13);
audReceived = parseFloat(allTextLines[allTextLines.length - 2].split(';')[2].replace(',', '.')).toFixed(1);
audDelivered = parseFloat(allTextLines[9].split(';')[2].replace(',', '.')).toFixed(1);
tle = parseFloat(allTextLines[7].split(';')[7].replace(',', '.')).toFixed(1);
glo = allTextLines[7].split(';')[2] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[2].replace(',', '.')).toFixed(1);
sglo = (glo * 100 / tle).toFixed(1);
rec = allTextLines[7].split(';')[3] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[3].replace(',', '.')).toFixed(1);
srec = (rec * 100 / tle).toFixed(1);
sbt = allTextLines[7].split(';')[4] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[4].replace(',', '.')).toFixed(1);
ssbt = (sbt * 100 / tle).toFixed(1);
ban = allTextLines[7].split(';')[5] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[5].replace(',', '.')).toFixed(1);
sban = (ban * 100 / tle).toFixed(1);
rtv = allTextLines[7].split(';')[6] == "-" ? 0 : parseFloat(allTextLines[7].split(';')[6].replace(',', '.')).toFixed(1);
srtv = (rtv * 100 / tle).toFixed(1);


document.getElementById("date").innerText = date;
document.getElementById("startEndTime").innerText = startEndTime;
document.getElementById("audReceived").innerText = audReceived;
document.getElementById("audDelivered").innerText = audDelivered;

document.getElementById("tle").innerText = tle;
document.getElementById("glo").innerText = glo == 0 ? "-" : glo;
document.getElementById("sglo").innerText = sglo == 0 ? "-" : sglo  + "%";
document.getElementById("rec").innerText = rec == 0 ? "-" : rec;
document.getElementById("srec").innerText = srec == 0 ? "-" : srec + "%";
document.getElementById("sbt").innerText = sbt == 0 ? "-" : sbt;
document.getElementById("ssbt").innerText = ssbt == 0 ? "-" : ssbt + "%";
document.getElementById("ban").innerText = ban == 0 ? "-" : ban;
document.getElementById("sban").innerText = sban == 0 ? "-" : sban + "%";
document.getElementById("rtv").innerText = rtv == 0 ? "-" : rtv;
document.getElementById("srtv").innerText = srtv == 0 ? "-" : srtv + "%";

var ctx = document.getElementById("chart").getContext('2d');
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.point.radius = 0;
Chart.defaults.global.elements.point.hitRadius = 10;
Chart.defaults.global.elements.line.tension = 0;



var chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: time,
        datasets: [{
            label: 'GLO',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 15 == 0 && context.dataset.data[context.dataIndex] != '0' ? 'auto' : false);
                },
                borderRadius: 5,
                backgroundColor: '#0000ff44',
                color: 'blue'

            },
            data: audGLO,
            borderWidth: 3,
            borderColor: '#0000ff',
            backgroundColor: 'transparent',
            color: '#0000ff',
            type:'line'
        },
        {
            label: 'REC',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 17 == 0 && context.dataset.data[context.dataIndex] != '0') ? 'auto' : false;
                },
                color: '#ff0000'
            },
            data: audREC,
            borderWidth: 3,
            borderColor: '#ff0000',
            backgroundColor: 'transparent',
            type: 'line'
        },
        {
            label: 'SBT',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 18 == 0 && context.dataset.data[context.dataIndex] != '0') ? 'auto' : false;
                },
                color: '#00b050'
            },

            data: audSBT,
            borderWidth: 3,
            borderColor: '#00b050',
            backgroundColor: 'transparent',
            type:'line'
        },
        {
            label: 'BAND',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 19 == 0 && context.dataset.data[context.dataIndex] != '0') ? 'auto' : false;
                },
                color: '#ff33cc'
            },

            data: audBAN,
            borderWidth: 3,
            borderColor: '#ff33cc',
            backgroundColor: 'transparent',
            type:'line'
        },
        {
            label: 'REDETV',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return (context.dataIndex % 20 == 0 && context.dataset.data[context.dataIndex]) != '0' ? 'auto' : false;
                },
                color: '#918a54'
            },

            data: audRTV,
            borderWidth: 3,
            borderColor: '#918a54',
            backgroundColor: 'transparent',
            type:'line'
        },
        {
            label: 'TLE',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return context.dataIndex % 20 == 0 && context.dataset.data[context.dataIndex] != '0';
                },
                color: '#999999'
            },

            data: audTLE,
            borderWidth: 3,
            borderColor: '#999999',
            backgroundColor: 'transparent',
            type:'line'
        },
        {
            label: 'BREAK',
            datalabels: {
                formatter: function (value, context) {
                    return parseFloat(value).toFixed(1);
                },
                display: function (context) {
                    return context.dataIndex % 20 == 0 && context.dataset.data[context.dataIndex] != '0';
                },
                color: '#999999'
            },

            data: intervals,
            borderColor: '#999999',
            backgroundColor: 'rgba(10,10,10,0.03)'
        }
        ]
    },
    options: {

        layout: {
            padding: {
                top: 30,
                left: 15
            }
        },
        plugins: {
            datalabels: {
                color: '#000000',
                align: 'top',
                display: 'auto',
                font: { weight: 'bold' }
            }
        },
        tooltips: {
            titleAlign: 'center',
            xPadding: 15,
            callbacks: {
                labelColor: function (tooltipItem, chart) {
                    var color = chart.data.datasets[tooltipItem.datasetIndex].borderColor;
                    return {
                        borderColor: color,
                        backgroundColor: color,
                        multiKeyBackground: color
                    };
                }
            },
            mode: 'index',
            // displayColors: true,
            position: 'nearest'
        },
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    autoSkip: false,
                    maxRotation: 0,
                    // Include a dollar sign in the ticks
                    callback: function (value, index, values) {
                        return value.endsWith("0") ? value : "";
                    }
                },
                 categoryPercentage: 1,
                 barPercentage: 1
            }],
            yAxes: [{
                display: false
            }]
        }
    }
});



function copyImageToClipboard() {

    html2canvas(document.body).then(canvas => {
        let fileName = `Prévia ${jornal} ${date.split('/').join('-')}`;
        const link = document.createElement('a');
        link.download = fileName + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        // var img = new Image();
        // img.src = canvas.toDataURL('image/jpg',0.8);

        // img.onload = function (){
        //     document.body.appendChild(img);

        // var r = document.createRange();
        // r.setStartBefore(img);
        // r.setEndAfter(img);
        // r.selectNode(img);
        // var sel = window.getSelection();
        // sel.addRange(r);
        // document.execCommand('copy');
        // document.body.removeChild(img);
        // sel.removeAllRanges();
        // alert('Prévia copiada para o clipboard!');
        // }
    });
}






