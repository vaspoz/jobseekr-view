vagrant status | findstr /r /i "running"
if %errorlevel% equ 0 (
	vagrant provision 
) else (
	vagrant up --provision
)
pause